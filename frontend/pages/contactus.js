import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'

export default function ContactUs() {

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <a href='http://localhost:3000'><Image src="/Scholar.gif" alt="OneStopScholar" className="nav-logo" width={120} height={120}></Image></a>
                <div className={styles.centerNav}>
                    <Link href='/scholarship' legacyBehavior><a>Scholarships</a></Link>
                    <Link href='/countries' legacyBehavior><a>Countries</a></Link>
                    <Link href='/degree' legacyBehavior><a>Degrees</a></Link>
                    <Link href='/contactus' legacyBehavior><a className={styles.selectedBold}>Contact Us</a></Link>
                </div>
                <div className='login-container'>
                    <Link href='/signin' legacyBehavior><a>Sign In</a></Link>
                    {/* <Link href='#' legacyBehavior><a>Sign Out</a></Link> */}
                </div>
            </nav>

            <div className={styles.banner}>
                <Image src="/Scholar.gif" alt="OneStopScholar" className="" width={200} height={200} />
            </div>
            
            <div className={styles.contactContainer}>
                <div className={styles.contactCard}>
                    <div className={styles.contactCardHeader}>
                        <h3>For Scholarship related queries</h3>
                    </div>
                    <div className={styles.grid}>
                        <div className='image'>
                        <Image src="/riya.jpeg" alt="" className={styles.contactPic} width={100} height={100} />
                        </div>
                        <div>
                            <p><b>Contact:</b> Riya Rajesh Patil</p>
                            <p><b>Email ID:</b> riya.patil@northeastern.edu</p>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.contactCard}>
                    <div className={styles.contactCardHeader}>
                        <h3>For Scholarship related queries</h3>
                    </div>
                    <div className={styles.grid}>
                        <div className='image'>
                        <Image src="/ritvik.jpeg" alt="" className={styles.contactPic} width={100} height={100} />
                        </div>
                        <div>
                            <p><b>Contact:</b> Ritvik Saxena</p>
                            <p><b>Email ID:</b> ritvik.saxena@northeastern.edu</p>
                        </div>
                    </div>
                </div>
                <div className={styles.contactCard}>
                    <div className={styles.contactCardHeader}>
                        <h3>For Technical related queries</h3>
                    </div>
                    <div className={styles.grid}>
                        <div className='image'>
                        <Image src="/souvik.jpeg" alt="" className={styles.contactPic} width={100} height={100} />
                        </div>
                        <div>
                            <p><b>Contact:</b> Souvik Dinda</p>
                            <p><b>Email ID:</b> souvik.dinda@northeastern.edu</p>
                        </div>
                    </div>
                </div>
                <div className={styles.contactCard}>
                    <div className={styles.contactCardHeader}>
                        <h3>For Business related queries</h3>
                    </div>
                    <div className={styles.grid}>
                        <div className='image'>
                        <Image src="/vinay.jpeg" alt="" className={styles.contactPic} width={100} height={100} />
                        </div>
                        <div>
                            <p><b>Contact:</b> Vinay Kumar Gudooru</p>
                            <p><b>Email ID:</b> vinay.gudooru@northeastern.edu</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}