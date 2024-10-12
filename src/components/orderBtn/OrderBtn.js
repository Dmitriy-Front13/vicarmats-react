import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const OrderBtn = () => {
  const navigate = useNavigate();
  const isShipping = useSelector((state) => state.priceConstructor.shipping.postalCode);
  return (
    <button
      className="order__btn"
      disabled={!isShipping}
      onClick={() => navigate('/checkout')}>Continue to checkout</button>
  )
}

export default OrderBtn;