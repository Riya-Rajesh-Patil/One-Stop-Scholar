import { getSession, signOut } from 'next-auth/react';
import styles from '../../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function StudentDashboard({scholarships, user}) {

    const handleSignOut = () => {
        signOut({callbackUrl: 'http://localhost:3000'});
    }

    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
            <a href='http://localhost:3000/student'><Image src="/Scholar.gif" alt="OneStopScholar" className="nav-logo" width={120} height={120}></Image></a>
                <div className={styles.centerNav}>
                    <Link href='/student' legacyBehavior><a>Dashboard</a></Link>
                    <Link href='/student/applications' legacyBehavior><a>Applications</a></Link>
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
                    scholarships.length === 0 ? <p>No scholarships Yet...</p> : (scholarships.map((scholarship, idx) => {
                        var date = scholarship.scholarshipDeadline;
                        date = date.split('T')[0];
                        
                        return (
                            <div key={idx}>
                            <div className={styles.schcard}>
                                <Link href={`/student/${scholarship._id}`} legacyBehavior>  
                                <a>{scholarship.scholarshipName}</a>
                                </Link>
                                <p className={styles.details}>{scholarship.scholarshipDescription}</p>
                                <p className={styles.details}>{scholarship.scholarshipSponsor}</p>
                                <p className={styles.details}>{scholarship.scholarshipAmt}</p>
                                <p className={styles.details}>{date}</p>
                                <p className={styles.details}>{scholarship.scholarshipCriteria}</p>
                                <p className={styles.details}>{scholarship.scholarshipApplicants}</p>
                            </div>
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
    const {params} = context;

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
        
        const scholarshipResponse = await fetch(`http://localhost:8080/scholarships/v1/search?country=${params.country}`)
        const scholarships = await scholarshipResponse.json();

        return{
            props: {
                session,
                user: session.user,
                scholarships
            }
        }
    }
}