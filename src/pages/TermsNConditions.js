import React from 'react'
import Navbar from '../components/Navbar'

function TermsNConditions() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      <Navbar />

        <div className="container mt-6">
    <h2>Terms and Conditions</h2>
    <p>Welcome to AZILFA Football Jersey Store! These Terms and Conditions govern your use of our website and the purchase
      of football jerseys. By accessing or using our website, you agree to be bound by these Terms and Conditions. Please
      read them carefully before proceeding with any purchase.</p>

    <h5>Product Availability</h5>
    <p>Our website offers both original team jerseys and jerseys with unique designs created by AZILFA. Availability of
      certain products may vary and is subject to change without notice.</p>

    <h5>Order Confirmation</h5>
    <p>Once you place an order, you will receive an order confirmation ID. This ID does not signify
      acceptance of your order, but rather acknowledges that we have received it. We reserve the right to cancel or refuse
      any order for any reason, including but not limited to inventory limitations, payment issues, or suspected fraudulent
      activity.</p>

    <h5>Pricing and Payment</h5>
    <p>Prices for our football jerseys are displayed in Rupees. Payment is due at the time of order placement. We accept
      payment through secure and reputable payment gateways. By submitting payment information, you warrant that you have
      the right to use the payment method.</p>

    <h5>Shipping and Delivery</h5>
    <p>We offer shipping options and delivery times during the checkout process. Please ensure that the shipping address you
      provide is accurate, as we are not responsible for any delays or losses due to incorrect address information.</p>

    <h5>Customization and Personalization</h5>
    <p>Each football jersey is individually made for a person, with personalized names and numbers. Due to the customized
      nature of these jerseys, we do not allow returns or exchanges once an order has been placed.</p>

    <h5>Cancellation Policy</h5>
    <p>If you wish to cancel your order, you may do so before a specific time 13:00(IST) every day. Orders confirmed after this
      time cannot be canceled.</p>

    <h5>Intellectual Property</h5>
    <p>Any AZILFA-designed jerseys available on our website are the exclusive intellectual property of AZILFA. Unauthorized
      reproduction or distribution of our designs is strictly prohibited.</p>

    <h5>User Conduct</h5>
    <p>You agree not to use our website for any unlawful or unauthorized purposes, including but not limited to infringing on
      the intellectual property rights of third parties, attempting to gain unauthorized access to our systems, or engaging
      in fraudulent activities.</p>

    <h5>Modification of Terms</h5>
    <p>We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon
      posting on our website. It is your responsibility to review these terms regularly.</p>

    <h5>Governing Law</h5>
    <p>These Terms and Conditions are governed by and construed in accordance with the laws of India, without regard to its
      conflict of law principles.</p>

    <p className="mt-5">By using our website and placing an order for a football jersey, you acknowledge that you have read,
      understood, and agreed to these Terms and Conditions.</p>

    <p>If you have any questions or concerns regarding these Terms and Conditions, please contact our customer support
      team.</p>
  </div>


    </>
  )
}

export default TermsNConditions