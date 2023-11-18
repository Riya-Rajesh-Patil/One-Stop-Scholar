import { getSession, signOut } from 'next-auth/react';
import styles from '../../styles/Home.module.css'
import Scholarship from "../../components/Scholarship";
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import Router from 'next/router';

function getScholarshipDetails({scholarship, user, profileData, alreadyApplied}) {

    const[showSpan, setShowSpan] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(typeof profileData.firstName !== 'undefined') {
            const url = 'http://localhost:8080/applications/'
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: "pending", studentId: profileData._id, scholarshipId: scholarship._id, sponsorEmail: scholarship.sponsorEmail})
            };
            const res = await fetch(url, requestOptions);
            
            if(res.ok) {
                setShowSpan(true);
                setTimeout(() => {
                setShowSpan(false);
                Router.push('/student');
            }, 1000);
            }
            
        } else Router.push('/student/profile')
        
    }

    const handleSignOut = () => {
        signOut({ callbackUrl: 'http://localhost:3000' });
    }

    var date = scholarship.scholarshipDeadline;
    date = date.split('T')[0];

    return (
        <div className={styles.container}>

            <nav className={styles.navbar}>
                <a href='http://localhost:3000/student'><Image src="/Scholar.gif" alt="OneStopScholar" className="nav-logo" width={120} height={120}></Image></a>
                <div className={styles.centerNav}>
                    <Link href='/student' legacyBehavior><a className={styles.selectedBold}>Dashboard</a></Link>
                    <Link href='/student/applications' legacyBehavior><a>Applications</a></Link>
                    <Link href='/student/countries' legacyBehavior><a>Countries</a></Link>
                </div>
                <div className='login-container'>
                    <Link href='/student/profile' legacyBehavior><a>{user.email}</a></Link>
                    <button onClick={handleSignOut} className={styles.signOutButton}>Sign Out</button>
                </div>
            </nav>

            <Scholarship id={scholarship._id} name={scholarship.scholarshipName} sponsor={scholarship.scholarshipSponsor} description={scholarship.scholarshipDescription} deadline={date} amount={scholarship.scholarshipAmt} criteria={scholarship.scholarshipCriteria} applicants={scholarship.scholarshipApplicants}></Scholarship>

            {
                alreadyApplied ? <div className={styles.successMessage}>Already Applied</div> : 
                <div className={styles.scholarshipApplyButton}>
                    <button onClick={handleSubmit}>Apply</button>
                    {
                    showSpan ? <div className={styles.successMessage}>Successfully Applied!</div> : null
                    }
                </div>
            }
            
            
            
        </div>
    ) 
}
export default getScholarshipDetails;


export async function getServerSideProps(context) {
    const session = await getSession(context);

    if(!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        }
    } else {
        const email = session.user.email;
        const url = `http://localhost:8080/nextAuthDb/users/${email}`;
        const response = await fetch(url);
        const userData = await response.json();

        if (userData[0].userType === 'sponsor') {
            return {
                redirect: {
                    destination: '/signin',
                    permanent: false,
                },
            }

        }

        const profileDataURL = `http://localhost:8080/studentDb/profile/${email}`;
        const profileResponse = await fetch(profileDataURL);
        const profileData = await profileResponse.json();

        const { params } = context;
        const scholarshipResponse = await fetch(`http://localhost:8080/scholarships/${params.scholarshipId}`);
        const data = await scholarshipResponse.json();

        const applicationURL = `http://localhost:8080/applications/v1/search?studentId=${profileData._id}&scholarshipId=${params.scholarshipId}`;
        const res = await (await fetch(applicationURL)).json();
        const application = res[0];

        var alreadyApplied = false;
        if(typeof application !== 'undefined') {
            alreadyApplied = true;
        } 
        
        

        return{
            props: {
                session,
                user: session.user,
                scholarship: data,
                profileData,
                alreadyApplied,
            }
        }

    }

}
