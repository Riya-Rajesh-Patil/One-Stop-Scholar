import { getSession, signOut } from 'next-auth/react';
import styles from '../../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function StudentDashboard({scholarships, user}) {

    const handleSignOut = () => {
        signOut({callbackUrl: 'http://localhost:3000'});
    }

    const countries = scholarships.map(scholarship => {
        return scholarship.country;
    })

    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
            <a href='http://localhost:3000/student'><Image src="/Scholar.gif" alt="OneStopScholar" className="nav-logo" width={120} height={120} /></a>
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

            <div className={styles.countryContainer}>
                <h2>Countries</h2>
                {
                    countries.length === 0 ? <p>No scholarship posted yet</p> :
                    countries.map(country => {
                        console.log(country);
                        return <div className={styles.country}>
                            <Link href={`/student/countries/${country}`} legacyBehavior><a>{country}</a></Link>
                        </div>
                    })
                }
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
        
        const scholarshipResponse = await fetch('http://localhost:8080/scholarships/')
        const data = await scholarshipResponse.json();

        return{
            props: {
                session,
                user: session.user,
                scholarships:data
            }
        }
    }
}