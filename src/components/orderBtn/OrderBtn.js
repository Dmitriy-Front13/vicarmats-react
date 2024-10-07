import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const OrderBtn = () => {
  const isShipping = useSelector((state) => state.priceConstructor.shipping.postalCode);
  return (
    <Link to="/checkout" className="modalBuy__form-submit" disabled={isShipping}>Continue to checkout</Link>
  )
}

export default OrderBtn;