import BillingForm from '../components/billingForm/BillingForm';
import OrderSummary from '../components/orderSummary/OrderSummary';

const Checkout = () => {
  return (
    <main>
      <OrderSummary/>
      <BillingForm/>
    </main>
  )
}

export default Checkout;