import OrderProduct from "../components/orderProduct/OrderProduct";
import OrderTotal from '../components/orderTotal/OrderTotal';
import OrderDelivery from '../components/orderDelivery/OrderDelivery';
import OrderPromo from '../components/orderPromo/OrderPromo';
import OrderBtn from '../components/orderBtn/OrderBtn';
import Reviews from '../components/Reviews/Reviews'
import '../assets/styles/promo.scss'
import '../assets/styles/total.scss'




const OrderPage = () => {
  return (
    <main>
      <OrderProduct />
      <OrderPromo/>
      <OrderDelivery/>
      <OrderTotal/>
      <OrderBtn/>
      <Reviews/>
    </main>
  )
}

export default OrderPage;