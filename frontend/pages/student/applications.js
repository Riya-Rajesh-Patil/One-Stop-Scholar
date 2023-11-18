import { getSession, signOut } from 'next-auth/react';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function StudentApplications({session, user, applications, data}) {

    const handleSignOut = () => {
        signOut({callbackUrl: 'http://localhost:3000'});
    }

    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
            <a href='http://localhost:3000/student'><Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image></a>
                <div className={styles.centerNav}>
                    <Link href='/student' legacyBehavior><a>Dashboard</a></Link>
                    <Link href='/student/applications' legacyBehavior><a className={styles.selectedBold}>Applications</a></Link>
                    <Link href='/student/countries' legacyBehavior><a>Countries</a></Link>
                </div>
                <div className='login-container'>
                    <Link href='/student/profile' legacyBehavior><a>{user.email}</a></Link>
                    <button onClick={handleSignOut} className={styles.signOutButton}>Sign Out</button>
                </div>
            </nav>

            <div className={styles.scholarships}>
                <div className={styles.schcardContainer}>
                {
                    data.length === 0 ? <p>Scholarships Not Applied Yet...</p> : (data.map((scholarship, idx) => {

                        return (
                            <div className={styles.schcard}>
                                <Link href={`/student/${scholarship._id}`} legacyBehavior>  
                                <a>{scholarship.scholarshipName}</a>
                                </Link>
                                <ul className={styles.appliedScholarshipContainer}>
                                    <li><span>Description:</span><p className={styles.details}>{scholarship.scholarshipDescription}</p></li>
                                    <li><span>Amount:</span><p className={styles.details}>{scholarship.scholarshipAmt}</p></li>
                                    <li><span>Status:</span><p className={styles.details}>{applications[idx].status}</p></li>
                                </ul>
                            </div>
                        )
                    }))
                }
                </div>
            </div>
            
        </div>
    )
}

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

        const applicationURL = `http://localhost:8080/applications/v1/search?studentId=${profileData._id}`;
        const applicationsResponse = await fetch(applicationURL);
        const applications = await applicationsResponse.json();

        const data = await Promise.all(applications.map(async (application) => {
            const id = application.scholarshipId;
            const res =  await fetch(`http://localhost:8080/scholarships/${id}`);
            const scholarshipData = await res.json();
            return scholarshipData;
        }))

        return{
            props: {
                session,
                user: profileData,
                applications,
                data
            }
        }
    } 
}