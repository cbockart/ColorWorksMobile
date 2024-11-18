import React from 'react';
import './TermsAndPolicy.css';
import xImage from './../../Icons/x.svg';

const TermsAndPolicy = ({ onClose }) => {
  //Variable to hold terms text
  const termsAndPolicyText = `
    At ColorWorks, we take your privacy and data protection seriously. We ensure that all personal information collected during the assessment process is handled securely and in accordance with relevant data protection laws.
    Your personal data will never be shared with third parties without your explicit consent. We are committed to maintaining the confidentiality of your information.
    Accuracy and Integrity

    The ColorWorks personality test is designed for personal development and entertainment purposes only. It should not be used as a substitute for professional advice or counseling.
    By using our application, you acknowledge that the results of the personality test are not absolute and may vary based on individual interpretation.
    User Conduct

    We encourage all users to engage with our application respectfully and responsibly. Any misuse, abuse, or disruptive behavior will not be tolerated and may result in the suspension or termination of your account.
    You are solely responsible for maintaining the confidentiality of your account credentials and ensuring that your account is not accessed by unauthorized individuals.
    Intellectual Property

    All content, including text, images, logos, and trademarks, displayed on the ColorsWork application, is the intellectual property of ColorsWork or its licensors. Unauthorized use or reproduction of this content is strictly prohibited.
    Updates and Modifications

    ColorWorks reserves the right to update, modify, or discontinue the application or any features thereof at any time without prior notice. We may also revise these terms and policies periodically to reflect changes in our practices or legal requirements.
    By continuing to use the ColorsWork application, you agree to abide by these terms and policies. If you have any questions or concerns regarding our terms and policies, please reach out to our team.
    Thank you for choosing ColorWorks. Let's explore the colorful world of personality together!
  `;

  return (
      <>
        <div className="terms-and-policies-container">

            <div className="exit-log-out-pop-up-container" onClick={onClose} >
                <img src={xImage} alt="exit" className='exit-log-out-pop-up' />
            </div>

            <div className="terms-pop-up-header-container">
                <div className="terms-pop-up-header">ColorWorks Terms and Policies</div>
            </div>

            <div className="terms-pop-up-feature-container">
                <div className="terms-pop-up-info">At ColorWorks, we take your privacy and data protection seriously. We ensure that all personal information collected during the assessment process is handled securely and in accordance with relevant data protection laws.
                  Your personal data will never be shared with third parties without your explicit consent. We are committed to maintaining the confidentiality of your information.
                  Accuracy and Integrity

                  The ColorWorks personality test is designed for personal development and entertainment purposes only. It should not be used as a substitute for professional advice or counseling.
                  By using our application, you acknowledge that the results of the personality test are not absolute and may vary based on individual interpretation.
                  User Conduct

                  We encourage all users to engage with our application respectfully and responsibly. Any misuse, abuse, or disruptive behavior will not be tolerated and may result in the suspension or termination of your account.
                  You are solely responsible for maintaining the confidentiality of your account credentials and ensuring that your account is not accessed by unauthorized individuals.
                  Intellectual Property

                  All content, including text, images, logos, and trademarks, displayed on the ColorsWork application, is the intellectual property of ColorsWork or its licensors. Unauthorized use or reproduction of this content is strictly prohibited.
                  Updates and Modifications

                  ColorWorks reserves the right to update, modify, or discontinue the application or any features thereof at any time without prior notice. We may also revise these terms and policies periodically to reflect changes in our practices or legal requirements.
                  By continuing to use the ColorsWork application, you agree to abide by these terms and policies. If you have any questions or concerns regarding our terms and policies, please reach out to our team.
                  Thank you for choosing ColorWorks. Let's explore the colorful world of personality together!
                </div>
            </div>
        </div>        
      </>
    );
};
export default TermsAndPolicy;
