import { getSession, signOut } from 'next-auth/react';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';

export default function SponsorProfile({session, profileData}) {

    const handleSignOut = () => {
        signOut({callbackUrl: 'http://localhost:3000'});
    }

    const [successMessage, setsuccessMessage] = useState(false);
    const [inputs, setInputs] = useState();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const validateContact = async (contact) => {
        const url = process.env.NEXT_PUBLIC_PHONE_VALIDATION_URL;
        const key = process.env.NEXT_PUBLIC_PHONE_VALIDATION_API_KEY;
        const res = await fetch(`${url}?api_key=${key}&phone=${contact}`);
        const data = await res.json();
        return data.valid;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validity = await validateContact(inputs.contact);
        if (validity) {
            const profileURL = `http://localhost:8080/sponsorDb/profile/${profileData.email}`;
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputs)
            };
            const res = await fetch(profileURL,requestOptions);
            if(res.ok) setsuccessMessage(true);
        } else window.alert("Kindly Enter Valid Contact Number");
}



    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <a href='http://localhost:3000/sponsor'><Image src="/site-logo.png" alt="OneStopScholar" className="nav-logo" width={150} height={50}></Image></a>
                <div className={styles.centerNav}>
                    <Link href='/sponsor' legacyBehavior><a>Dashboard</a></Link>
                    <Link href='/sponsor/applications' legacyBehavior><a>Applications</a></Link>
                </div>
                <div className='login-container'>
                    <Link href='/sponsor/profile' legacyBehavior><a className={styles.selectedBold}>{profileData.email}</a></Link>
                    <button onClick={handleSignOut} className={styles.signOutButton}>Sign Out</button>
                </div>
            </nav>
            
            <form className={styles.studentProfileForm} onSubmit={handleSubmit}>
            <h2 className={styles.header}>Sponsor Profile Section</h2>
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
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        defaultValue={profileData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>Contact:</label>
                    <input 
                        type="text" 
                        name="contact" 
                        defaultValue ={profileData.contact} 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputElements}>
                    <label>SSN:</label>
                    <input 
                        type="text" 
                        name="SSN" 
                        defaultValue ={profileData.SSN} 
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

        const profileTableURL = `http://localhost:8080/sponsorDb/profile/${email}`;
        const profileResponse = await fetch(profileTableURL);
        const profileData = await profileResponse.json();

        return{
            props: {
                session,
                profileData
            }
        }
    } 
}