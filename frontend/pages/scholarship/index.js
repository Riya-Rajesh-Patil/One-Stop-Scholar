import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

function scholarshipList({ scholarships }) {

  return (
    
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <a href="http://localhost:3000" ><Image src="/Scholar.gif" alt="OneStopScholar" className="nav-logo" width={120} height={120}></Image></a>
        <div className={styles.centerNav}>
          <Link href='/scholarship' legacyBehavior><a className={styles.selectedBold}>Scholarships</a></Link>
          <Link href='/countries' legacyBehavior><a>Countries</a></Link>
          <Link href='/degree' legacyBehavior><a>Degrees</a></Link>
          <Link href='/contactus' legacyBehavior><a>Contact Us</a></Link>
        </div>
        <div className='login-container'>
          <Link href='/signin' legacyBehavior><a>Sign In</a></Link>
          {/* <Link href='#' legacyBehavior><a>Sign Out</a></Link> */}
        </div>
      </nav>

      <div className={styles.banner}>
        <Image src="/browseSch.png" alt="OneStopScholar" width={1300} height={400} />
      </div>

      <h2 className={styles.popScholarships}>Available Scholarships</h2>

      <div className={styles.scholarships}>
        <div className={styles.schcardContainer}>
          {
            scholarships.length === 0 ? <p>No scholarships Yet...</p> : (scholarships.map((scholarship, idx) => {
              var date = scholarship.scholarshipDeadline;
              date = date.split('T')[0];
              return (
                <div key={idx}>
                  <div className={styles.schcard}>
                    <Link href={`/scholarship/${scholarship._id}`} legacyBehavior>  
                      <a className={styles.schName}>{scholarship.scholarshipName}</a>
                    </Link>
                    <p className={styles.schAmt}>Upto ${scholarship.scholarshipAmt}</p>
                    <p className={styles.details}>Desc: {scholarship.scholarshipDescription}</p>
                    <p className={styles.details}>Sponser: {scholarship.scholarshipSponsor}</p>
                    <p className={styles.details}>Date Posted: {date}</p>
                    <p className={styles.details}>Criteria: {scholarship.scholarshipCriteria}</p>
                    <p className={styles.details}>Number of Applicants: {scholarship.scholarshipApplicants}</p>
                  </div>
                </div>
              )
            }
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default scholarshipList;

export async function getStaticProps() {
  const response = await fetch('http://localhost:8080/scholarships/')
  const data = await response.json();
  return {
    props: {
      scholarships: data
    }
  }
}