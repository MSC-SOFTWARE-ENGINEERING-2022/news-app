import configs from "../../../configs/configs";
import "./privacy.css";


const {brand, contacts} = configs

const Privacy = () => {
  return (
  <div className="privacy">
    <h1>Privacy Policy for Newspaper Company</h1>
    <p>At {brand}, we respect your privacy and are committed to protecting the personal information that you share with us. This Privacy Policy explains how we collect, use, and disclose your personal information when you use our website or other services provided by us.</p>
    <h2>Information We Collect</h2>
    <p>When you use our website, we may collect information about you, including:</p>
    <ul>
      <li>Personal information, such as your name, email address, and phone number, that you provide when you register for an account, subscribe to our services, or otherwise contact us.</li>
      <li>Information about your use of our website, including your IP address, browser type, and other technical information.</li>
      <li>Information about your interests and preferences, such as the topics you read about on our website or the types of products you are interested in.</li>
    </ul>
    <h2>How We Use Your Information</h2>
    <p>We may use the information we collect for the following purposes:</p>
    <ul>
      <li>To provide you with the products and services you have requested.</li>
      <li>To communicate with you about our products and services.</li>
      <li>To personalize your experience on our website.</li>
      <li>To improve our website and the services we offer.</li>
      <li>To comply with legal or regulatory requirements.</li>
    </ul>
    <h2>Disclosure of Your Information</h2>
    <p>We may disclose your personal information to third parties in the following circumstances:</p>
    <ul>
      <li>To service providers that help us operate our website and provide our services.</li>
      <li>To business partners or advertisers who may be interested in offering you products or services that may be of interest to you.</li>
      <li>To comply with legal or regulatory requirements, including in response to a subpoena, court order, or other legal request.</li>
      <li>In connection with a sale, merger, or other corporate transaction.</li>
    </ul>
    <h2>Security of Your Information</h2>
    <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no security measures are foolproof, and we cannot guarantee the security of your personal information.</p>
    <h2>Your Rights</h2>
    <p>You have the right to access, update, and delete your personal information. You may also opt-out of receiving marketing communications from us at any time. To exercise your rights or if you have any questions about this Privacy Policy, please contact us using the contact information provided below.</p>
    <h2>Changes to This Policy</h2>
    <p>We may update this Privacy Policy from time to time. If we make any material changes, we will notify you by email or by posting a notice on our website.</p>
    <h2>Contact Us</h2>
    <p>If you have any questions or concerns about this Privacy Policy, please contact us at {contacts.email}.</p>
  </div>
  )
}

export default Privacy;