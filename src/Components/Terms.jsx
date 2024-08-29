
import '../Css/Terms.css'
import { useNavigate } from 'react-router-dom'

function Terms() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="container mt-4 mb-5">
          <h2 className="text-center text-primary fw-bold center ">Terms and conditions</h2>
          <p className='p-3 mt-2'>
            <ol>
              <li>
                Introduction:
                Welcome to Synthosphere Academy, an online learning platform operated by Synthosphere Technologies Pvt. Ltd. These terms and conditions (Terms) govern your use of Synthosphere Academy (the Platform). By accessing or using the Platform, you agree to comply with these Terms. If you do not agree with these Terms, please do not use the Platform.</li>

              <li> Use of the Platform:
                <ul className="submenu">
                  <li> Eligibility: You must be at least 18 years old to use the Platform. By using the Platform, you represent and warrant that you are at least 18 years old.
                  </li>
                  <li>
                    Registration: To access certain features of the Platform, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                  </li>

                  <li> User Account: You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                  </li>
                </ul>
              </li>
              <li>Content:</li>
              <ul className="submenu">
                <li > User Content: You retain ownership of any content you submit, post, or display on or through the Platform (User Content). By submitting, posting, or displaying User Content, you grant us a non-exclusive, worldwide, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate, and distribute such User Content.
                </li>
                <li>
                  Prohibited Content: You agree not to submit, post, or display any User Content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of anothers privacy, or otherwise objectionable.
                </li>
              </ul>
              <li> Fees and Payment:</li>
              <ul className="submenu">
                <li>
                  Pricing: The pricing for courses and other services offered through the Platform is listed on the Platform and is subject to change at any time.
                </li>
                <li>
                  Payment: Payment for courses and other services must be made at the time of purchase. We accept payment through the methods listed on the Platform.
                </li>
              </ul>
              <li>Intellectual Property:</li>

              <ul className="submenu">
                <li>Ownership: All content, including but not limited to text, graphics, logos, images, audio clips, and software, used on the Platform is the property of Synthosphere Academy or its licensors and is protected by copyright, trademark, and other intellectual property laws.
                </li>
                <li>
                  You may not reproduce, distribute, modify, or create derivative works of any content on the Platform without our express written permission.
                </li>
              </ul>
              <li>
                Termination:
                We may terminate or suspend your access to the Platform at any time, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
              </li>
              <li> Limitation of Liability:

                To the fullest extent permitted by applicable law, Synthosphere Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use the Platform; (b) any unauthorized access to or use of our servers and/or any personal information stored therein; (c) any interruption or cessation of transmission to or from the Platform; or (d) any bugs, viruses, Trojan horses, or the like that may be transmitted to or through the Platform by any third party.
              </li>
              <li> Governing Law:

                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
              </li>
              <li> Changes to Terms:

                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days  notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </li>
              <li> Contact Us:

                If you have any questions about these Terms, please contact us at info@synthosphereacademy.in.
              </li>
            </ol>
          </p>

          
        {/* <button className='btn btn-primary btn-lg' onClick={handlersumit} >Ok</button> */}
        </div>

      </div>
    </>
  )
}

export default Terms
