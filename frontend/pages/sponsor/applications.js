import { getSession, signOut } from 'next-auth/react';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router';

export default function StudentApplications({ email, applications, scholarshipData, studentData }) {


    const handleAcceptSubmit = async (id) => {
        console.log("id",id);
        const url = `http://localhost:8080/applications/${id}`;
        console.log("url",url);
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: "Accepted"})
        };
        const res = await fetch(url, requestOptions);
        if(res.ok) {
            setTimeout(() => {
            window.location.reload();
        }, 1000);
        }
    }

    const handleRejectSubmit = async (id) => {
        const url = `http://localhost:8080/applications/${id}`;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: "Rejected"})
        };
        const res = await fetch(url, requestOptions);
        if(res.ok) {
            setTimeout(() => {
            window.location.reload();
        }, 1000);
        }
    }
    
    const handleSignOut = () => {
        signOut({ callbackUrl: 'http://localhost:3000' });
    }

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <a href='http://localhost:3000/student'><Image src="/Scholar.gif" alt="OneStopScholar" className="nav-logo" width={120} height={120}></Image></a>
                <div className={styles.centerNav}>
                    <Link href='/sponsor' legacyBehavior><a>Dashboard</a></Link>
                    <Link href='/sponsor/applications' legacyBehavior><a className={styles.selectedBold}>Applications</a></Link>
                </div>
                <div className='login-container'>
                    <Link href='/sponsor/profile' legacyBehavior><a>{email}</a></Link>
                    <button onClick={handleSignOut} className={styles.signOutButton}>Sign Out</button>
                </div>
            </nav>

            <div className={styles.sprApplications}>
                <div className={styles.sprContainer}>
                    {
                        scholarshipData.length === 0 ? <p>No Applications here</p> : (scholarshipData.map((scholarship, idx) => {
                            
                            return (
                                <div className={styles.schcard}>
                                    <h2 className={styles.schName}>{scholarship.scholarshipName}</h2>
                                    <ul className={styles.appliedScholarshipContainer}>
                                        <li><span>Student Name:</span><p className={styles.details}>{studentData[idx].firstName+" "+studentData[idx].lastName}</p></li>
                                        <li><span>Email Address:</span><p className={styles.details}>{studentData[idx].email}</p></li>
                                        <li><span>Gender:</span><p className={styles.details}>{studentData[idx].gender}</p></li>
                                        <li><span>University:</span><p className={styles.details}>{studentData[idx].university}</p></li>
                                        <li><span>Year Of Completion:</span><p className={styles.details}>{studentData[idx].yearOfCompletion}</p></li>
                                        <li><span>Grade:</span><p className={styles.details}>{studentData[idx].grade}</p></li>
                                        <li><span>Highest Qualification:</span><p className={styles.details}>{studentData[idx].highestQualification}</p></li>
                                        <li><span>Status:</span><p className={styles.details}>{applications[idx].status}</p></li>
                                        <button onClick={() => handleAcceptSubmit(scholarship._id)} className={styles.acceptButton}>Accept</button>
                                        <button onClick={() => handleRejectSubmit(scholarship._id)} className={styles.rejectButton}>Reject</button>
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

    if (!session) {
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

        if (userData[0].userType === 'student') {
            return {
                redirect: {
                    destination: '/signin',
                    permanent: false,
                },
            }
        }

        const applicationURL = `http://localhost:8080/applications/v1/search?email=${email}`;
        const applicationsResponse = await fetch(applicationURL);
        const applications = await applicationsResponse.json();

        const scholarshipData = await Promise.all(applications.map(async (application) => {
            const id = application.scholarshipId;
            const res = await fetch(`http://localhost:8080/scholarships/${id}`);
            const scholarshipData = await res.json();
            return scholarshipData;
        }))

        const studentData = await Promise.all(applications.map(async (application) => {
            const id = application.studentId;
            const res = await fetch(`http://localhost:8080/studentDb/profile/v1/search?_id=${id}`);
            const studentData = await res.json();
            return studentData[0];
        }))

        return {
            props: {
                session,
                applications,
                scholarshipData,
                studentData, 
                email
            }
        }
    }
}