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
                    <Link href='/countries' legacyBehavior><a>Destinations</a></Link>
                    <Link href='/degree' legacyBehavior><a>Degrees</a></Link>
                    <Link href='/contactus' legacyBehavior><a>Contact Us</a></Link>
                </div>
                <div className='login-container'>
                    <Link href='/signin' legacyBehavior><a>Sign In</a></Link>
                    {/* <Link href='#' legacyBehavior><a>Sign Out</a></Link> */}
                </div>
            </nav>

      <div className={styles.banner}>
      <h1 className={styles.footerPageHeaders}>Disclaimer</h1>
      </div>


            <div className={styles.termsConditions}>
                <h1>Disclaimers</h1>
                <p>Onestop Scholar does not guarantee that the Site or any Content, service or feature will be error-free or uninterrupted; or that any defects will be corrected, or that your use of the Site will provide specific results. The Site and its content are delivered strictly on an "as-is" and "as-available" basis. All information provided on the Site is subject to change without notice. Onestop Scholar cannot ensure that any of the files or any other data you download from the Site will be free of viruses or other contamination, or any other destructive features. Onestop Scholar disclaims all warranties, express or implied, including any warranties of accuracy, non-infringement, merchantability and fitness for a particular purpose. Onestop Scholar disclaims any and all liability for the acts, omissions and the conduct of any third parties in connection with or related to your use of the Site and/or any Onestop Scholar services. You are completely responsible for your use of the Site and any linked sites therein. Your sole remedy against Onestop Scholar for dissatisfaction with the site or any content is to stop using the site or any such content at once. This limitation of relief is a part of the bargain between the parties. The above disclaimer applies to any damages, liability or other perceived injuries caused by any kind of failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction of or unauthorized access to, alteration of, or use; whether for breach of contract, tort, negligence or any other cause of action, similar or otherwise. Onestop Scholar reserves the right to take any of the following actions, at any time it deems appropriate, without notice: (1) to modify, suspend or terminate operation of or access to the Site, or any portion of the Site, for any reason it deems appropriate; (2) to modify or change the Site, or any portion of the Site, and any applicable policies or terms; (3) to interrupt the operation of the Site, or any portion of the Site, as necessary to perform routine or non-routine maintenance, error correction, or other changes; and (4) suspend or cancel any registered account for any reason it deems appropriate, including without limitation any violation of these Terms of Use.</p>
                <h1>Content</h1>
                <p>All trademarks, computer code, text, logos, graphics, user interfaces, visual interfaces, photographs and artwork (collectively, "Content"), including but not limited to: the structure, design, selection, coordination, expression, and arrangement of all Content contained on the Site is owned, controlled or licensed by or to Onestop Scholar, and is protected by copyright, patent laws, trademark laws, and many other intellectual property rights and unfair competition laws. No part of the Site nor any Content may be copied, reproduced in any way, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted or distributed in any way (including "mirroring") to any other computer, server, Web site or other medium for any form of publication or distribution or for any commercial enterprise whatsoever, without Onestop Scholar’s express prior written permission except as expressly provided in these Terms of Use. You may use any information on Onestop Scholar services made available by Onestop Scholar for downloading from the Site, provided that you:<br></br> 1. Do not remove any proprietary notice language in any and/or all copies of such documents;<br></br>2. Use such information only for your own personal, non-commercial purpose and do not copy or in any way display such information on any networked computer or broadcast it in any media or in any form;<br></br>3. Make no modifications to any such information; and, Do not make any additional or supplementary representations or warranties relating to the content of the Site.</p>
                <h1>Miscellaneous</h1>
                <p>If any of the provisions of these Terms of Use are held by a court or other tribunal of competent jurisdiction to be void or unenforceable, such provisions shall be limited or eliminated to the minimum extent necessary and replaced with a valid provision that best embodies the intent of these Terms of Use, so that these Terms of Use shall remain in full force and effect. These Terms of Use constitute the entire agreement between you and Onestop Scholar with regard to your use of the Site, and any and all other written or oral agreements or understandings previously existing between you and Onestop Scholar with respect to such use are hereby superseded and cancelled. Onestop Scholar will not accept any counter-offers to these Terms of Use, and all such offers are hereby categorically rejected. Onestop Scholar’s failure to insist on or enforce strict performance of these Terms of Use shall not be construed as a waiver by Onestop Scholar of any provision or any right it has to enforce these Terms of Use, nor shall any course of conduct between Onestop Scholar and you or any other party be deemed to modify any provision of these Terms of Use. These Terms of Use shall not be interpreted or construed to confer any rights or remedies on any third parties.</p>
                <h1>Links to Other Sites</h1>
                <p>This Site may contain links to various other, independent, third-party Web sites ("Linked Sites"). These Linked Sites are provided solely as a convenience to our visitors and said Linked Sites are not under Onestop Scholar’s control. Onestop Scholar is not responsible for, nor does it endorse the content of any such Linked Sites, including any information or materials contained on or within such Linked Sites. Onestop Scholar does not assume any responsibility or liability for the actions, product, content and/or information of these and other third parties and/or their web sites. It is your responsibility to call judgement regarding your interaction with the aforementioned Linked Sites.</p>

            </div>
        </div>
    )
}