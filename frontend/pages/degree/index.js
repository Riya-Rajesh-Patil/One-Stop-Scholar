import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Degree() {
  return (
    <div className={styles.container}>

      <nav className={styles.navbar}>
        <a href='http://localhost:3000'><Image src="/Scholar.gif" alt="OneStopScholar" className="nav-logo" width={120} height={120}></Image></a>
        <div className={styles.centerNav}>
          <Link href='/scholarship' legacyBehavior><a>Scholarships</a></Link>
          <Link href='/countries' legacyBehavior><a>Countries</a></Link>
          <Link href='/degree' legacyBehavior><a className={styles.selectedBold}>Degrees</a></Link>
          <Link href='/contactus' legacyBehavior><a>Contact Us</a></Link>
        </div>
        <div className='login-container'>
          <Link href='/signin' legacyBehavior><a>Sign In</a></Link>
          {/* <Link href='#' legacyBehavior><a>Sign Out</a></Link> */}
        </div>
      </nav>

      <div className={styles.banner}>
        <Image src="/quote.png" alt="OneStopScholar" width={1300} height={300} />
      </div>

      

      <div className={styles.degree}>
        <h2 className={styles.header}>Most Popular Degrees</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={[styles.image5, styles.cardImage].join(" ")}></div>
            <p>Professional Certificate</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image6, styles.cardImage].join(" ")}></div>
            <p>Undergraduate Degrees</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image7, styles.cardImage].join(" ")}></div>
            <p>Transfer Degree</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image8, styles.cardImage].join(" ")}></div>
            <p>Associate Degree</p>
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={[styles.image6, styles.cardImage].join(" ")}></div>
            <p>Bachelor Degree</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image5, styles.cardImage].join(" ")}></div>
            <p>Graduate Degrees</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image8, styles.cardImage].join(" ")}></div>
            <p>Master Degree</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image7, styles.cardImage].join(" ")}></div>
            <p>Doctoral Degree</p>
          </div>
        </div>
      </div>

    </div>
  )
}
