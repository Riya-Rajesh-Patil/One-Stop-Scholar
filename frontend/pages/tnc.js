import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'

export default function Home() {

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

      <div className={styles.banner}>
        <h1 className={styles.footerPageHeaders}>Terms & Condition</h1>
      </div>


            <div className={styles.termsConditions}>
                <h1>Terms of Use</h1>
                <p>The Terms of Use apply to the Onestop Scholar website located at www.Onestop Scholar, and all associated websites linked to www.Onestop Scholar by Onestop Scholar, LLC, its subsidiaries and affiliates, (collectively, the "Site"). The Site is the property of Onestop Scholar, LLC ("Onestop Scholar") and its licensors. By using the site, you agree to these terms of use; if you do not agree with these terms of use, do not use the Site. Onestop Scholar reserves the right, at its sole discretion, to change, modify, add, remove or terminate any portion of this Agreement, in whole or in part, at any time, without prior notice. As a user of the Site, it is your responsibility to check these Terms of Use for changes periodically. Your continued use of the Site, following the posting of any such changes will mean that you unconditionally accept and agree to the aforementioned changes. For as long as you comply with these Terms of Use, Onestop Scholar grants you a non-exclusive, personal, non-transferable, limited privilege to enter and use the Site.</p>
                <h1>Violation of Terms of Use</h1>
                <p>Onestop Scholar reserves the right to investigate and take legal action against any illegal and/or unauthorized use of the Site. Onestop Scholar’s decision not to pursue legal action for any violation of these Terms of Use shall not be construed as a waiver of any provision of the Terms of Use or Onestop Scholar’s legal rights. Onestop Scholar may prohibit you from using or accessing the Site, in whole or in part, for any or no reason, at any time, in its sole discretion, without notifying you. Onestop Scholar may disclose any information we have about you (including your identity) if we have determined that such disclosure is necessary in connection with any investigation or complaint regarding your use of the Site, or to identify, contact or bring legal action against someone who may be causing injury to or interference with (either intentionally or unintentionally) Onestop Scholar’s rights or property, or the rights or property of visitors to or users of the Site, including Onestop Scholar’s customers. Onestop Scholar reserves the right at all times to disclose any information that Onestop Scholar deems necessary to comply with any applicable law, regulation, legal process or governmental request. Onestop Scholar also may disclose your information if and when it has been determined that applicable law requires or permits such disclosure, including exchanging information with other companies and organizations for fraud protection purposes. <br></br> You acknowledge and agree that Onestop Scholar may preserve transmittal or communication by you with Onestop Scholar through the Site or any service offered on or through the Site, and may also disclose such data if required to do so by law or Onestop Scholar determines that such preservation or disclosure is reasonably necessary to: <br></br>Comply with legal process<br></br>Enforce these Terms of Use<br></br>Respond to claims that any such data violates the rights of others <br></br>Protect the rights, property or personal safety of Onestop Scholar, its employees, users of or visitors to the Site, and the public. <br></br>If Onestop Scholar takes any legal action against you as a result of your violation of these Terms of Use, Onestop Scholar will be entitled to recover from you, and you will agree to pay, all reasonable attorneys’ fees and costs of any such action, in addition to any other relief granted to Onestop Scholar. You agree that Onestop Scholar will not be liable to you or to any third party for termination of your access to the Site as a result of any violation of these Terms of Use. <br></br>This Agreement and our Privacy Policy contain the entire agreement between you and Onestop Scholar with respect to this Site. It supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and Onestop Scholar with respect to the Site. Any rights not expressly granted herein are reserved.</p>
                <h1>Void Where Prohibited</h1>
                <p>Onestop Scholar administers and operates the www.Onestop Scholar Site from a location in Highland Park, Illinois, USA; other Onestop Scholar sites may be administered and operated from various other locations. Although the Site is accessible worldwide, not all features, products or services discussed, referenced, provided or offered through or on the Site are available to all persons or in all geographic locations, or appropriate or available for use outside the United States. Onestop Scholar reserves the right to limit, in its sole discretion, the provision and quantity of any feature, product or service to any person or geographic area. Any offer for any feature, product or service made on the Site is void where prohibited. If you choose to access the Site from outside the United States, you do so by your own initiative and you are solely responsible for complying with applicable local laws.</p>
                <h1>Limitation of Liability</h1>
                <p>In no event, where prohibited by law, will Onestop Scholar be liable to you for any indirect, consequential, exemplary, incidental or punitive damages, including lost profits, even if Onestop Scholar has been advised of the possibility of such damages. If, notwithstanding the other provisions of these Terms of Use, Onestop Scholar is found to be liable to you for any kind of damage or loss which arises from or is in any way connected with your use of the Site or any Content, in no event shall Onestop Scholar’s liability ever exceed the greater of The total of any fees with respect to any service or feature of or on the Site paid in the three months prior to the date of the initial claim made against Onestop Scholar. $250 US currency. Some jurisdictions do not allow limitations of liability, so the foregoing limitation may not apply to you.</p>

                </div>
        </div>
    )
}