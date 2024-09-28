
import '../assets/styles/warranty&delivery.scss'

const Delivery = () => {
  return (
    <main>
      <section className="delivery">
        <div class="container">
          <div class="delivery__inner">
            <h2 class="delivery__title">Payment and Shipping</h2>
            <p class="delivery__desc">EvaTech provides shipping services for customer orders within the province of Ontario. The average delivery time ranges from 5 to 10 working days, depending on the schedule of the transport company and the remoteness of the destination. <br/> The ordering process involves four steps:</p>
            <div class="delivery__items-box">
              <h5 class="delivery__items-title">Making an order includes 4 steps:</h5>
              <ul class="delivery__items">
                <li class="delivery__item">Entering personal data (full name, phone number, email address).</li>
                <li class="delivery__item">Specifying the address and delivery method.</li>
                <li class="delivery__item">Payment of the order.</li>
                <li class="delivery__item">Confirmation of order details by our manager.</li>
              </ul>
              <div class="delivery__payment-box">
                <p class="delivery__desc">We offer free delivery within Kingston. The delivery cost for other areas can be reviewed during the billing details step when ordering car mats. We offer free delivery within Kingston. The delivery cost for other areas can be reviewed during the billing details step when ordering car mats. </p>
                <p class="delivery__desc">Customers have the option to pay by e-transfer. Orders are put into production only after payment has been received. Orders that are not paid within 3 days will not be processed. Payment should be made to <b>info@eva-tech.ca</b></p>
                <p class="delivery__desc">Please use the order number as the secret question and "Evatech" as the answer. Additionally, cash payments are accepted exclusively in Kingston.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 

export default Delivery;