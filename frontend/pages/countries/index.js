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
          <Link href='/countries' legacyBehavior><a class={styles.selectedBold}>Countries</a></Link>
          <Link href='/degree' legacyBehavior><a>Degrees</a></Link>
          <Link href='/contactus' legacyBehavior><a>Contact Us</a></Link>
        </div>
        <div className='login-container'>
          <Link href='/signin' legacyBehavior><a>Sign In</a></Link>
          {/* <Link href='#' legacyBehavior><a>Sign Out</a></Link> */}
        </div>
      </nav>

      <div className={styles.banner}>
        <Image src="/boston.jpg" alt="OneStopScholar" width={1260} height={500} />
      </div>

      

      <div className={styles.countries}>
        <h2 className={styles.header}>Most Popular Destinations</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={[styles.image1, styles.cardImage].join(" ")}></div>
            <p>Scholarships in<br /><b>United States of America</b></p>
              <p className={styles.hide}>Harvard University | Massachusetts Institute of Technology | Stanford University</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image14, styles.cardImage].join(" ")}></div>
            <p>Scholarships in<br /><b>United Kingdom</b></p>
            <p className={styles.hide}>University of Oxford | University of Cambridge | University College London</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image3, styles.cardImage].join(" ")}></div>
            <p>Scholarships in<br />
            <b>Australia</b></p>
            <p className={styles.hide}>University of Melbourne | University of Sydney | University of Queensland</p>
          </div>
        </div>

        <div className={styles.cardContainer}>
        <div className={styles.card}>
            <div className={[styles.image4, styles.cardImage].join(" ")}></div>
            <p>Scholarships in<br />
            <b>Germany</b></p>
            <p className={styles.hide}>University of Munich | Ruprecht Karls University Heidelberg | Humboldt University of Berlin</p>
        </div>
        <div className={styles.card}>
            <div className={[styles.image9, styles.cardImage].join(" ")}></div>
            <p>Scholarships in<br />
            <b>Ireland</b></p>
            <p className={styles.hide}>Trinity College Dublin | University College Dublin | University College Cork</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image10, styles.cardImage].join(" ")}></div>
            <p>Scholarships in<br />
            <b>United Arab Emirates</b></p>
            <p className={styles.hide}>United Arab Emirates University | American University of Sharjah | Khalifa University</p>
          </div>
        </div>
        
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={[styles.image11, styles.cardImage].join(" ")}></div>
            <p>Scholarships in<br />
            <b>New Zealand</b></p>
            <p className={styles.hide}>University of Auckland | University of Otago | University of Canterbury</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image12, styles.cardImage].join(" ")}></div>
            <p>Scholarships in<br />
            <b>Japan</b></p>
            <p className={styles.hide}>University of Tokyo | Kyoto University | Osaka University</p>
          </div>

          <div className={styles.card}>
            <div className={[styles.image13, styles.cardImage].join(" ")}></div>
            <p>Scholarships in<br />
            <b>Singapore</b></p>
            <p className={styles.hide}>INSEAD Singapore | National University of Singapore | Nanyang Technological University</p>
          </div>
        </div>

        </div>
      </div>
  )
}