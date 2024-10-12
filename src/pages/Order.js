import OrderProduct from "../components/orderProduct/OrderProduct";
import OrderTotal from '../components/orderTotal/OrderTotal';
import OrderDelivery from '../components/orderDelivery/OrderDelivery';
import OrderPromo from '../components/orderPromo/OrderPromo';
import OrderBtn from '../components/orderBtn/OrderBtn';
import Reviews from '../components/Reviews/Reviews';

import '../assets/styles/order.scss';

const OrderPage = () => {
  return (
    <main>
      <section className="order">
        <div className="container">
          <h1 className='order__title'>Step 4 of 5</h1>
          <h2 className="order__sub-title">Calculate the Shipping Cost for Your Order</h2>
          <div className="order__inner">
            <OrderProduct />
            <OrderPromo />
            <OrderDelivery />
            <OrderTotal />
            <OrderBtn />
          </div>
        </div>
      </section>
      <Reviews />
    </main >
  )
}

export default OrderPage;
