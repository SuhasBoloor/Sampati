import React, { useState } from 'react';

function Help() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="help-page">
      <h1>Help</h1>
      <div className="dropdown">
        <button onClick={() => toggleDropdown('faq')}>Frequently Asked Questions</button>
        {activeDropdown === 'faq' && (
          <div className="dropdown-content">
            <p><strong>How do I create an account?</strong><br />To create an account, click on the "Sign Up" button and follow the instructions to provide your details.</p>
            <p><strong>How do I reset my password?</strong><br />You can reset your password by clicking on the "Forgot Password" link on the login page and following the instructions.</p>
            <p><strong>How do I create an account?</strong><br />To create an account, click on the "Sign Up" button and follow the instructions to provide your details.</p>
            <p><strong>How do I reset my password?</strong><br />You can reset your password by clicking on the "Forgot Password" link on the login page and following the instructions.</p>
            <p><strong>Is there a mobile app available?</strong><br />Yes, we have a mobile app available for both Android and iOS devices. You can download it from the respective app stores.</p>
            
          </div>
        )}
      </div>
      <div className="dropdown">
        <button onClick={() => toggleDropdown('gettingStarted')}>Getting Started</button>
        {activeDropdown === 'gettingStarted' && (
          <div className="dropdown-content">
            <p><strong>How do I navigate the website?</strong><br />Use the menu at the top of the page to navigate to different sections of the website.</p>
            <p><strong>How do I search for properties?</strong><br />Use the search bar on the homepage to search for properties by location, price, or other criteria.</p>
            <p><strong>How do I navigate the website?</strong><br />Use the menu at the top of the page to navigate to different sections of the website.</p>
            <p><strong>How do I search for properties?</strong><br />Use the search bar on the homepage to search for properties by location, price, or other criteria.</p>
            <p><strong>How do I create a new listing?</strong><br />To create a new listing, log in to your account and navigate to the "Create Listing" page. Fill in the required details about your property and submit the form to create your listing.</p>
            <p><strong>How do I edit my profile?</strong><br />To edit your profile, log in to your account and navigate to the "Edit Profile" page. Here, you can update your personal information, profile picture, and other details as needed.</p>

          </div>
        )}
      </div>
      <div className="dropdown">
        <button onClick={() => toggleDropdown('accManagement')}>Account Management</button>
        {activeDropdown === 'accManagement' && (
          <div className="dropdown-content">
            <p><strong>How do I update my email address?</strong><br />To update your email address, log in to your account and navigate to the "Account Settings" page. 
            Here, you can find an option to edit your email address. Enter your new email address and save the changes.</p>
            <p><strong>How do I change my password?</strong><br/>To change your password, go to the "Change Password" section in your account settings. 
            Enter your current password, followed by your new password, and confirm it. Click the "Save Changes" button to update your password.</p>
            <p><strong>How do I delete my account?</strong><br/>If you wish to delete your account, contact our customer support team. 
            They will assist you in the account deletion process and ensure that all your data is securely removed from our system.</p>

          </div>
        )}
      </div>
      <div className="dropdown">
        <button onClick={() => toggleDropdown('techSupport')}>Payment and Billing</button>
        {activeDropdown === 'techSupport' && (
          <div className="dropdown-content">
            <p><strong>I'm experiencing slow loading times. What should I do?</strong><br/>Slow loading times may be due to a variety of factors, including network issues or server maintenance. Try refreshing the page or accessing the website at a later time. If the issue persists, contact our technical support team for assistance.</p>
            <p><strong>I'm having trouble accessing certain features. What should I do?</strong><br/>If you're having trouble accessing certain features, try clearing your browser's cache and cookies or using a different web browser. If the issue persists, contact our technical support team for further assistance.</p>
            <p><strong>I received an error message. What does it mean and how can I fix it?</strong><br/>Error messages may indicate various issues, such as invalid input or technical errors. Refer to the error message for specific instructions or contact our technical support team for assistance in resolving the issue.</p>
          </div>
        )}
      </div>
      <div className="dropdown">
        <button onClick={() => toggleDropdown('paymentBilling')}>Technical Support</button>
        {activeDropdown === 'paymentBilling' && (
          <div className="dropdown-content">
            <p><strong>How do I update my payment method?</strong><br/>To update your payment method, go to the "Billing" or "Payment Settings" section in your account settings. Here, you can add a new payment method or update your existing one.</p>
            <p><strong>How do I view my billing history?</strong><br/>You can view your billing history by accessing the "Billing" or "Payment History" section in your account settings. Here, you'll find a record of all your past transactions and invoices.</p>
            <p><strong>How do I cancel my subscription?</strong><br/>To cancel your subscription, go to the "Subscription" or "Membership" section in your account settings. Here, you'll find an option to cancel your subscription. Follow the prompts to confirm the cancellation.</p>

          </div>
        )}
      </div>
      <div className="dropdown">
        <button onClick={() => toggleDropdown('privacySecurity')}>Privacy and Security</button>
        {activeDropdown === 'privacySecurity' && (
          <div className="dropdown-content">
            <p><strong>How do I manage my privacy settings?</strong><br/>You can manage your privacy settings by accessing the "Privacy" or "Security" section in your account settings. Here, you can control who can view your profile, contact you, and access your information.</p>
            <p><strong>How do I report a security issue?</strong><br/>If you believe you've encountered a security issue, such as a vulnerability or unauthorized access, please report it to our security team immediately. You can find contact information for our security team on our website.</p>
            <p><strong>How does the website protect my personal information?</strong><br/>We take the security and privacy of your personal information seriously. We employ industry-standard security measures to protect your data from unauthorized access, use, or disclosure. You can review our privacy policy for more information on how we handle and protect your data.</p>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Help;
