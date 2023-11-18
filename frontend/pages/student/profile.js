import { getSession, signOut } from 'next-auth/react';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';

export default function StudentProfile({session, profileData}) {
    console.log(profileData);

    const handleSignOut = () => {
        signOut({callbackUrl: 'http://localhost:3000'});
    }

    const [successMessage, setsuccessMessage] = useState(false);
    const [inputs, setInputs] = useState();

    // Set the input value when there is change in any field
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const profileURL = `http://localhost:8080/studentDb/profile/${profileData.email}`;
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        };
        const res = await fetch(profileURL,requestOptions);
        if(res.ok) setsuccessMessage(true);

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
                    <Link href='/student/profile' legacyBehavior><a className={styles.selectedBold}>{profileData.email}</a></Link>
                    <button onClick={handleSignOut} className={styles.signOutButton}>Sign Out</button>
                </div>
            </nav>
            
            <form className={styles.studentProfileForm} onSubmit={handleSubmit}>
                <h2 className={styles.header}>Student Profile Section</h2>
                <h3 className={styles.formSectionHeader}>Personal Information</h3>
                <div className={styles.inputElements}>
                    <label>First Name:</label>
                    <input 
                        type="text" 
                        name="firstName" 
                        defaultValue={profileData.firstName}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Last Name:</label>
                    <input 
                        type="text" 
                        name="lastName" 
                        defaultValue ={profileData.lastName} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Date of Birth (MM/DD/YYYY):</label>
                    <input
                        type="text"
                        name="dateOfBirth"
                        defaultValue={profileData.dateOfBirth}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Email:</label>
                    <input 
                        type="text" 
                        name="email" 
                        defaultValue={profileData.email}
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Gender:</label>
                    <input 
                        type="text" 
                        name="gender" 
                        defaultValue ={profileData.gender} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Current City:</label>
                    <input 
                        type="text" 
                        name="currentCity" 
                        defaultValue ={profileData.currentCity} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Current Country:</label>
                    <input 
                        type="text" 
                        name="currentCountry" 
                        defaultValue ={profileData.currentCountry} 
                        onChange={handleChange} 
                        required
                    />
                </div>

                <h3 className={styles.formSectionHeader}>Educational Details</h3>
                <div className={styles.inputElements}>
                    <label>Highest Qualification:</label>
                    <input 
                        type="text" 
                        name="highestQualification" 
                        defaultValue ={profileData.highestQualification} 
                        onChange={handleChange} 
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Major:</label>
                    <input 
                        type="text" 
                        name="majors" 
                        defaultValue ={profileData.majors} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Grade:</label>
                    <input 
                        type="text" 
                        name="grade" 
                        defaultValue ={profileData.grade} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>University:</label>
                    <input 
                        type="text" 
                        name="university" 
                        defaultValue ={profileData.university} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Year of Completion:</label>
                    <input 
                        type="number" 
                        min="1900" 
                        max="2099" 
                        step="1" 
                        name="yearOfCompletion" 
                        defaultValue ={profileData.yearOfCompletion} 
                        onChange={handleChange}
                        required
                    />
                </div>

                <h3 className={styles.formSectionHeader}>Work Experience</h3>
                <div className={styles.inputElements}>
                    <label>Company:</label>
                    <input 
                        type="text" 
                        name="company" 
                        defaultValue ={profileData.company} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Location:</label>
                    <input 
                        type="text" 
                        name="companyLocation" 
                        defaultValue ={profileData.companyLocation} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Position:</label>
                    <input 
                        type="text" 
                        name="position" 
                        defaultValue ={profileData.position} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Duration(years):</label>
                    <input 
                        type="text" 
                        name="duration" 
                        defaultValue ={profileData.duration} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.saveButton}>
                    <input type="submit" value="Save" />
                </div>

                {
                    successMessage ? <div className={styles.successMessage}>Data saved successfully!</div> : null
                }
                
            </form>
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
        const usersTableURL = `http://localhost:8080/nextAuthDb/users/${email}`;
        const response = await fetch(usersTableURL);
        const userData = await response.json();

        if (userData[0].userType === 'sponsor') {
            return {
                redirect: {
                    destination: '/signin',
                    permanent: false,
                },
            }

        }

        const profileTableURL = `http://localhost:8080/studentDb/profile/${email}`;
        const profileResponse = await fetch(profileTableURL);
        const profileData = await profileResponse.json();

        return{
            props: {
                session,
                profileData: profileData[0],
            }
        }
    } 
}