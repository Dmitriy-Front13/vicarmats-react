import { useState } from 'react';
import '../assets/styles/privacyPolicy.scss';
const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState("privacy");
  return (
    <div className="legal-information">
      <h1>Legal Information</h1>
      <div className="card">
        <div className="card-header">
          <h2>EVATECH Legal Documents</h2>
        </div>
        <div className="card-content">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => setActiveTab('privacy')}
            >
              Privacy Policy
            </button>
            <button
              className={`tab ${activeTab === 'terms' ? 'active' : ''}`}
              onClick={() => setActiveTab('terms')}
            >
              Terms and Conditions
            </button>
          </div>
          <div className="tab-content">
            {activeTab === 'privacy' && (
              <div className="privacy-policy">
                <section>
                  <h3>Business Information</h3>
                  <p>Business Name: EVATECH</p>
                  <p>Business Number (BN): 718799950</p>
                  <p>Address: 1135 Basswood Pl, Kingston, Ontario</p>
                  <p>Email: info@eva-tech.ca</p>
                </section>

                <section>
                  <h3>1. Collection of Information</h3>
                  <p>We collect personal information such as your name, address, phone number, email, and payment details when you place an order on our website. This information is necessary to fulfill your order and provide customer service.</p>
                </section>

                <section>
                  <h3>2. Use of Information</h3>
                  <p>We use your personal information to:</p>
                  <ul>
                    <li>Process and deliver your orders;</li>
                    <li>Communicate with you regarding your order or any queries;</li>
                    <li>Improve our products and services.</li>
                  </ul>
                  <p>We do not share your personal information with third parties, except for trusted partners involved in payment processing and shipping (e.g., PayPal, Canada Post, UPS, Purolator).</p>
                </section>

                <section>
                  <h3>3. Cookies</h3>
                  <p>Our website may use cookies to enhance your shopping experience and analyze site traffic. You can disable cookies in your browser, but this may affect site functionality.</p>
                </section>

                <section>
                  <h3>4. Security</h3>
                  <p>We take the security of your personal information seriously and use industry-standard measures to protect it. All payment transactions are encrypted to ensure confidentiality.</p>
                </section>

                <section>
                  <h3>5. Data Retention</h3>
                  <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required by law.</p>
                </section>

                <section>
                  <h3>6. Your Rights</h3>
                  <p>You have the right to access, correct, or delete your personal information at any time. To do so, please contact us at info@eva-tech.ca.</p>
                </section>

                <section>
                  <h3>7. Changes to This Policy</h3>
                  <p>We may update this Privacy Policy from time to time. Any changes will be posted on our website, and by continuing to use our services, you agree to the updated terms.</p>
                </section>
              </div>
            )}
            {activeTab === 'terms' && (
              <div className="terms-conditions">
                <section>
                  <h3>Business Information</h3>
                  <p>Business Name: EVATECH</p>
                  <p>Business Number (BN): 718799950</p>
                  <p>Address: 1135 Basswood Pl, Kingston, Ontario</p>
                  <p>Email: info@eva-tech.ca</p>
                </section>

                <section>
                  <h3>1. Introduction</h3>
                  <p>This agreement (the "Agreement") sets forth the terms and conditions under which Evatech ("we", "our", or "us") agrees to sell custom-made car mats ("Products") to the customer ("you" or "your"). By placing an order on our website, you accept and agree to these terms and conditions.</p>
                </section>

                <section>
                  <h3>2. Products</h3>
                  <p>Evatech specializes in custom-made car mats. You can use our online calculator to select available models and colors. However, please note that the calculator does not guarantee that we have mats specifically for your vehicle in stock. In cases where we cannot produce mats for your vehicle, we will refund your payment in full.</p>
                </section>

                <section>
                  <h3>3. Payment</h3>
                  <p>We accept payments via PayPal and credit cards through our website, which are processed automatically. For payments via e-transfer or cash, you must contact our sales department at info@eva-tech.ca. Orders paid via e-transfer or cash must be completed within 3 business days; otherwise, the order will be canceled.</p>
                </section>

                <section>
                  <h3>4. Production Time</h3>
                  <p>Our standard production time for custom car mats is up to 5 business days from the date of payment. If a specific model for your vehicle is not in stock or we are unable to produce it, additional time (up to 14 days) may be required. You will be informed if a delay occurs, and if production is not possible, we will provide a full refund.</p>
                </section>

                <section>
                  <h3>5. Shipping</h3>
                  <p>We provide shipping across Ontario through Canada Post, UPS, and Purolator. Delivery times typically range from 1 to 3 working days, depending on the courier and your location. Shipping costs are calculated at checkout based on your postal code.</p>
                  <p>Free delivery is available within Kingston, Ontario. For other locations, shipping costs are calculated during the order process. The shipping fee displayed during checkout is final and will not increase after the order is confirmed.</p>
                  <p>Once the product is handed over to the delivery service, the risk of loss or damage is transferred to you. In case of product loss or delay, claims should be made directly to the delivery company.</p>
                </section>

                <section>
                  <h3>6. Warranty</h3>
                  <p>We offer a 6-month warranty on all of our car mats, covering defects in materials or workmanship under normal use. This warranty does not cover damage from misuse, improper installation, or accidental damage. A warranty card will be sent to you by email upon purchase, and the warranty will begin on the date of delivery. Proof of purchase and the warranty card must be provided for any claims.</p>
                </section>

                <section>
                  <h3>7. Installation</h3>
                  <p>Proper installation of the car mats is crucial to their performance. Instructions for installation are provided with your purchase. Evatech is not responsible for any issues resulting from improper installation, and such cases are not covered by the warranty.</p>
                </section>

                <section>
                  <h3>8. Returns and Refunds</h3>
                  <p>If you are not satisfied with your product, you may return it within 7 days of receiving it, provided that the product is unused, in its original packaging, and in resalable condition. A warranty card and proof of purchase must be included with the return.</p>
                  <p>For non-defective products, return shipping costs are the responsibility of the customer. For defective products, Evatech will replace the product and cover all associated shipping costs. Returns must be initiated within 7 days of delivery by contacting us at info@eva-tech.ca. Products must be shipped back within this timeframe. Any returns made after 7 days may not be accepted.</p>
                  <p>Refunds will be processed via the original payment method or by e-transfer if the original method is unavailable.</p>
                </section>

                <section>
                  <h3>9. Limitation of Liability</h3>
                  <p>Evatech's liability is limited to the cost of the product purchased. We are not responsible for any indirect, incidental, or consequential damages arising from the use or inability to use the product.</p>
                </section>

                <section>
                  <h3>10. Governing Law</h3>
                  <p>This Agreement shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein.</p>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default PrivacyPolicy;