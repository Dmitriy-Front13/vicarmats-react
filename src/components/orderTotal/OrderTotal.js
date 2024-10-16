import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { updatePrice } from "../priceConstructor/priceConstructorSlice";

import './orderTotal.scss';
import Popover from "../Popover/Popover";



const OrderTotal = ({ inCheckout }) => {
  const dispatch = useDispatch();
  const subtotal = useSelector((state) => state.priceConstructor.price.subtotal);
  const shipping = useSelector((state) => state.priceConstructor.shipping.shippingPrice);
  const total = subtotal + shipping;
  useEffect(() => {
    dispatch(updatePrice({
      total: total
    }));
  }, [total, dispatch]);

  return (
    <div className={`order-total ${inCheckout ? 'checkout__total' : ''}`}>
      <h4 className="order-total__title">Order summary</h4>
      <ul className="order-total__items">
        <li className="order-total__item">
          Subtotal
          <span className="order-total__item-price">{subtotal} $</span>
        </li>
        <li className="order-total__item">
          Shipping
          {
            typeof shipping === 'number'
              ? <span className="order-total__item-price">{shipping} $</span>
              : <span className="order-total__item-price order-total__item-price--none">Enter postal code</span>
          }
        </li>
        <li className="order-total__item">
          Tax
          <span className="order-total__item-price order-total__item-tax">
            No HST/GST Applied
            <Popover className="order-total__tooltip">
              As a small business with revenue under $30,000, we are not required to charge HST/GST. This allows us to keep our prices affordable for our valued customers!
            </Popover>
          </span>
        </li>
        <li className="order-total__item">
          Total
          <span className="order-total__item-price">{total} $</span>
        </li>
      </ul>
    </div>
  )
}

export default OrderTotal;