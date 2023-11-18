import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'

export default function Home() {

  const emailRef = useRef();

  const validateEmail = async (email) => {
    const url = process.env.NEXT_PUBLIC_EMAIL_VALIDATION_URL;
    const key = process.env.NEXT_PUBLIC_EMAIL_VALIDATION_API_KEY
    const response = await fetch(`${url}?api_key=${key}&email=${email}`);
    const data = await response.json();
    return data.is_valid_format.value;
  }

  const handleSubmit = async () => {
    
    const email = emailRef.current.value;
    const validity = await validateEmail(email)
    if(validity) {
      console.log("Email is valid: " + email);
    } else alert("Kindly enter valid email address");
    
  }

  return (
    <div className={styles.container}>

      <nav className={styles.navbar}>
        <a href='http://localhost:3000'><Image src="/Scholar.gif" alt="OneStopScholar" className="nav-logo" width={120} height={120}></Image></a>
        <div className={styles.centerNav}>
          <Link href='/scholarship' legacyBehavior><a>Scholarships</a></Link>
          <Link href='/countries' legacyBehavior><a>Countries</a></Link>
          <Link href='/degree' legacyBehavior><a>Degrees</a></Link>
          <Link href='/contactus' legacyBehavior><a>Contact Us</a></Link>
        </div>
        <div className='login-container'>
          <Link href='/signin' legacyBehavior><a>Sign In</a></Link>
          {/* <Link href='#' legacyBehavior><a>Sign Out</a></Link> */}
        </div>
      </nav>

      <div className={styles.imageBannerContainer}>
      {/* <button className={styles.applynow}><Link href='/signin'>Know More</Link></button> */}
      <Link href='/signin' className={styles.applynow}>Know More</Link>
      </div> 

      <div className={styles.destinations}>
        <h2 className={styles.header}>Most Popular Countries to <b className={styles.selectedBolder}>Build</b> you career</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={[styles.image1, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>United States</h3>
          </div>

          <div className={styles.card}>
            <div className={[styles.image2, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>United Kingdom</h3>
          </div>

          <div className={styles.card}>
            <div className={[styles.image3, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>Australia</h3>
          </div>

          <div className={styles.card}>
            <div className={[styles.image4, styles.cardImage].join(" ")}></div>
            <p>Scholarships in</p>
            <h3>Germany</h3> 
          </div>
        </div >
        <div>
          <Link href='/countries' legacyBehavior><Image src="/see-more.png" class={styles.seeMore1}  alt=""   width={50} height={50} /></Link>
        </div>
      </div>

      <div className={styles.banner}>
        <Image src="/blog.png" alt="blog" className="" width={1260} height={650} />
      </div> 

      <div className={styles.orangebox}>
      <div className={styles.form}>
        <a className={styles.formtext}>Subscribe to Our Newsletter<br />
        Keep up to date with scholarship news, student success stories, and how to advocate for students!</a>
          <input type='email' placeholder='Enter Your Email' ref={emailRef} />
          <button onClick={handleSubmit}>Know More</button>
        </div>
        </div>

      <div className={styles.destinations}>
        <h2 className={styles.header}>Most Popular <b className={styles.selectedBolder}>Degrees</b> to pursue</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={[styles.image5, styles.cardImage].join(" ")}></div>
            <p>Scholarships for</p>
            <h3>Professional Certificate</h3>
          </div>

          <div className={styles.card}>
            <div className={[styles.image6, styles.cardImage].join(" ")}></div>
            <p>Scholarships for</p>
            <h3>Bachelor Degree</h3>
          </div>

          <div className={styles.card}>
            <div className={[styles.image7, styles.cardImage].join(" ")}></div>
            <p>Scholarships for</p>
            <h3>Master Degree</h3>
          </div>

          <div className={styles.card}>
            <div className={[styles.image8, styles.cardImage].join(" ")}></div>
            <p>Scholarships for</p>
            <h3>Doctoral Degree</h3> 
          </div>
        </div >
        <div>
          <Link href='/degree' legacyBehavior><Image src="/see-more.png" class={styles.seeMore2}  alt=""   width={50} height={50} /></Link>
        </div>
      </div>

      <div className={styles.reviewsSection}>
        <h2 className={styles.header}>Student Reviews</h2>
        <div className={styles.reviewsContainer}>
          <div className={styles.reviews}>
            <div className={styles.reviewGrid}>
            <Image src="/inverted-comma1.jpeg" alt=""   width={40} height={60} />
            <div>
              <div className={styles.reviewsHeader}>
                <div className={styles.reviewHeader1}>
                  <Image src="/virat.jpeg" alt="" className={styles.reviewPhoto}  width={55} height={55} />
                  <h3>Virat Kohli</h3>
                </div>
                <h4>Massachusetts Institute of Technology</h4>
              </div>
              <div>  
                <p>I was able to win the Sage Marketing Scholarship for $10,000 because the access that the Onestop Scholar provides. There's so many different types of scholarships, all for different kind of people. It is giving the user pure opportunity. All you need is effort.</p>
              </div>
              </div>
              <Image src="/inverted-comma2.jpeg" alt="" width={55} height={303} />
            </div>
          </div>
          <div className={styles.reviews}>
            <div className={styles.reviewGrid}>
            <Image src="/inverted-comma1.jpeg" alt=""   width={40} height={60} />
            <div>
              <div className={styles.reviewsHeader}>
              <div className={styles.reviewHeader1}>
                  <Image src="/anushka.jpeg" alt="" className={styles.reviewPhoto}  width={55} height={55} />
                  <h3>Anushka Sharma</h3>
                </div>
                <h4>University of Cambridge</h4>
              </div>
              <div>  
                <p>I simply accepted that I only had the tuition and scholarship opportunities that were explicitly presented to me until I discovered Onestop Scholar. Now the tough task of affording my full-time MBA is far more manageable.</p>
              </div>
              </div>
              <Image src="/inverted-comma2.jpeg" alt="" width={55} height={303} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.featuredIn}>
        <h2 className={styles.header}><b>Onestop Scholar</b> has been featured in</h2>
        <div className={styles.featuresLogo}>
            <Image src="/forbeslogo.png" alt="" className={styles.featuresLogo1} width={200} height={100} />
            <Image src="/cnnlogo.png" alt=""  className={styles.featuresLogo1} width={200} height={100} />
            <Image src="/cbslogo.png" alt=""  className={styles.featuresLogo1} width={200} height={100} />
        </div>
      </div>
    </div>
  )
}
