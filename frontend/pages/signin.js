import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { signIn } from 'next-auth/react'


export default function SignIn() {

    const handleStudentClick = () => {
        console.log("Student function");
        signIn('github',{callbackUrl: 'http://localhost:3000/student'});
        
    }

    const handleSponsorClick = () => {
        console.log("Sponsor function");
        signIn('github',{callbackUrl: 'http://localhost:3000/sponsor'});
    }

    return(
        <div className={styles.container}>

            <nav className={styles.navbar}>
            <a href='http://localhost:3000'><Image href="" src="/Scholar.gif" alt="OneStopScholar" className="nav-logo" width={120} height={120}></Image></a>
                <div className={styles.centerNav}>
                <Link href='/scholarship' legacyBehavior><a>Scholarships</a></Link>
                <Link href='/countries' legacyBehavior><a>Countries</a></Link>
                <Link href='/degree' legacyBehavior><a>Degrees</a></Link>
                <Link href='/contactus' legacyBehavior><a>Contact Us</a></Link>
                </div>
                <div className='login-container'>
                <Link href='/signin' legacyBehavior><a className={styles.selectedBold}>Sign In</a></Link>

                </div>
            </nav>
            
            <div className={styles.bgPic}></div>
            <div className={styles.signInDivContainer}>
                <h1 className={styles.debt}>Fighting Student Debt</h1>
                <p className={styles.debtText}>Create or apply to exclusive scholarships,<br /> fellowships, and grants, in minutes.</p>

                <div className={styles.signInContainer}>
                    <button onClick={handleStudentClick} className={styles.signInButton}><img src="/signin-student.png" alt="applicant" className={styles.doner} /></button>
                    <button onClick={handleSponsorClick} className={styles.signInButton}><img src="/signin-sponsor.png" alt="doner" className={styles.doner} /></button>
                </div>
            </div>
             
        </div>
    )
}