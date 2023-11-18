import { getSession, signOut } from 'next-auth/react';
import styles from '../../styles/Home.module.css'
import Scholarship from "../../components/Scholarship";
import Link from 'next/link'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import Router  from 'next/router';

function getScholarshipDetails({ scholarship }) {

    const handleSubmit = async () => {
        Router.push('/signin');
        // signIn('', { callbackUrl: 'http://localhost:3000/signin' });
    }

    var date = scholarship.scholarshipDeadline;
    date = date.split('T')[0];
    return (
        <div className={styles.container}>

            <nav className={styles.navbar}>
                <Image href="/" src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image>
                <div className={styles.centerNav}>
                    <Link href='#' legacyBehavior><a>Scholarships</a></Link>
                    <Link href='#' legacyBehavior><a>Destinations</a></Link>
                    <Link href='#' legacyBehavior><a>Degrees</a></Link>
                    <Link href='#' legacyBehavior><a>Contact Us</a></Link>
                </div>
                <div className='login-container'>
                    <Link href='/signin' legacyBehavior><a>Sign In</a></Link>
                </div>
            </nav>

            <Scholarship id={scholarship._id} name={scholarship.scholarshipName} sponsor={scholarship.scholarshipSponsor} description={scholarship.scholarshipDescription} deadline={date} amount={scholarship.scholarshipAmt} criteria={scholarship.scholarshipCriteria} applicants={scholarship.scholarshipApplicants}></Scholarship>
            <button onClick={handleSubmit}>Apply</button>
        </div>
    )
}
export default getScholarshipDetails


export async function getStaticPaths() {
    const response = await fetch('http://localhost:8080/scholarships/');
    const data = await response.json();
    const paths = data.map(scholarship => {
        return {
            params: {
                scholarshipId: `${scholarship.id}`
            }
        }
    })

    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`http://localhost:8080/scholarships/${params.scholarshipId}`);
    const data = await response.json();

    return {
        props: {
            scholarship: data
        }
    }
}

// export async function getServerSideProps(context) {
//     const session = await getSession(context);

//     if(!session) {
//         return {
//             redirect: {
//                 destination: '/signin',
//                 permanent: false,
//             },
//         }
//     } else {
//         const email = session.user.email;
//         const url = `http://localhost:8080/nextAuthDb/users/${email}`;
//         const response = await fetch(url);
//         const userData = await response.json();

//         if (userData[0].userType === 'sponsor') {
//             return {
//                 redirect: {
//                     destination: '/signin',
//                     permanent: false,
//                 },
//             }

//         } else if(typeof userData[0].userType === 'undefined') {
//             const requestOptions = {
//                 method: 'PUT',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ userType: "student"})
//             };
//             await fetch(url, requestOptions);

//             const profileTableURL = `http://localhost:8080/studentDb/profile/`;
//             const profileRequestOptions = {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ email: email})
//             };
//             await fetch(profileTableURL,profileRequestOptions);
//         }

//         return{
//             props: {
//                 session,
//                 user: session.user
//             }
//         }
//     }
// }