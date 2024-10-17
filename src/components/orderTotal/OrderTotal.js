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
            typeof shipping === 'number' ? (
              shipping === 0 ? (
                <span className="order-total__item-price order-total__item-price--free">
                  <svg xmlns="http://www.w3.org/2000/svg" className="order-total__item-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                  Free shipping</span>
              ) : (
                <span className="order-total__item-price">{shipping} $</span>
              )
            ) : (
              <span className="order-total__item-price order-total__item-price--none">Enter postal code</span>
            )
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