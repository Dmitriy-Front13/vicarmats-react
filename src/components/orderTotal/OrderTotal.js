import { useSelector } from "react-redux";
const OrderTotal = () => {
  const subtotal = useSelector((state) => state.priceConstructor.price);
  const shipping = useSelector((state) => state.priceConstructor.shipping.shippingPrice)
  const total = Number(subtotal) + shipping;
  return (
    <div className="container">
      <div className="order__total">
        <div className="order__items">
          <div className="order__total-item">
            <p className="total-text">Subtotal</p>
            <span className="total-price">{subtotal}$</span>
          </div>
          <div className="order__total-item">
            <p className="total-text">Shipping</p>
            <span className="total-price">{shipping}$</span>
          </div>
        </div>
        <div className="order__total-item">
          <p className="total-text bold">Total</p>
          <span className="total-price">{total}$</span>
        </div>
      </div>
    </div>
  )
}

export default OrderTotal;