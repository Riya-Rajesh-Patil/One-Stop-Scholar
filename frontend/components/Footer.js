import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
    return(
        <div className={styles.footer}>
            <p className={styles.copyrightText}>NEU Students Scholarship Portal <img src='/copyright-white.png' alt='Copyright-Logo' className={styles.copyrightLogo} /></p>
        
            <div className={styles.links}>
                <Link href='/tnc' legacyBehavior><a>Terms & Conditions</a></Link>
                <Link href='/privacy' legacyBehavior><a>Privacy Statement</a></Link>
                <Link href='/disclaimer' legacyBehavior><a>Disclaimer</a></Link>
            </div>
            <div className={styles.social}>
            <Link href='https://www.facebook.com/' legacyBehavior><Image src="/facebook-white.png" alt="" className={styles.socialIcons} width={50} height={50}/></Link>
            <Link href='https://twitter.com/home' legacyBehavior><Image src="/twitter-white.png" alt="" className={styles.socialIcons} width={50} height={50}/></Link>
            <Link href='https://www.linkedin.com/' legacyBehavior><Image src="/linkedin-white.png" alt="" className={styles.socialIcons} width={50} height={50}/></Link>
            </div>
        </div>
    )
}

export default Footer;