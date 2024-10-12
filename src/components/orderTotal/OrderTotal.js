import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { updatePrice } from "../priceConstructor/priceConstructorSlice";

import './orderTotal.scss';

const OrderTotal = ({inCheckout}) => {
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
    <div className={`order-total ${inCheckout ? 'checkout-form__total' : ''}`}>
      <ul className="order-total__items">
        <li className="order-total__item">
          Subtotal
          <span className="order-total__item-price">{subtotal} $</span>
        </li>
        <li className="order-total__item">
          Shipping
          <span className="order-total__item-price">{shipping} $</span>
        </li>
        <li className="order-total__item">
          Tax
          <span className="order-total__item-price">№ HST165t Appolo</span>
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