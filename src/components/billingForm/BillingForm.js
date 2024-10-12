import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Toastify from 'toastify-js';
import axios from 'axios';

import Spinner from '../spinner/Spinner';
import OrderSummary from '../orderSummary/OrderSummary';
import OrderTotal from "../orderTotal/OrderTotal";

import { getCurrentDate } from '../../utils/getCurrentDate';


import './billingForm.scss';

const BillingForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const state = useSelector((state) => state.priceConstructor);
  const { carMake, carModel, carYear, carpetColor, carpetTrim, set, shipping, price, promo } = state;

  const [orderNumber, setOrderNumber] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrderNumber = async () => {
      try {
        const response = await axios.get('https://vicarmats.com/orderNumber.php');
        if (response.data && response.data.orderNumber) {
          setOrderNumber(response.data.orderNumber);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchOrderNumber();
  }, []);


  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const date = getCurrentDate();
      const { firstName, lastName, ...otherData } = data;
      const fullName = `${firstName} ${lastName}`;
      const payload = {
        formName: 'modalBuy',
        date,
        carMake: carMake.label,
        carModel: carModel.label,
        carYear: carYear.label,
        rugBackgroundColor: carpetColor,
        rugOutlineColor: carpetTrim,
        setType: set,
        promoCode: promo.usePromo ? 'yes' : 'no',
        promoCodeValue: promo.promoValue,
        discountValue: promo.discount,
        postalCode: shipping.postalCode,
        shippingPrice: shipping.shippingPrice,
        subtotalPrice: price.product,
        totalPrice: price.total,
        orderNumber,
        userName: fullName,
        ...otherData,
      }
      const response = await axios.post('https://eva-tech.ca/action.php', payload);

      if (response.status === 200) {
        axios.post('https://vicarmats.com/orderNumber.php');
        const div = document.createElement("div");
        div.innerHTML = `
        Thank you for your order<br>
        Hi ${fullName},<br>
        Thanks for your order. It’s on-hold until we confirm that payment has been received.<br>
        <span class="bold">Please send your payment total amount to evatech@GMAIL.COM. No need to write anything in the message.<br>
        Secret Question: My order number ${orderNumber}<br>
        Secret Answer: Evatech</span><br>
        Product:<br>
        Car make - ${carMake.label}<br>
        Car model - ${carModel.label}<br>
        Car year - ${carYear.label}<br>
        Mat color - ${carpetColor}<br>
        Trim color - ${carpetTrim}<br>
        Set name - ${set} (+ Footrest for a driver mat as a gift!)
      `;
        Toastify({
          duration: 6000,
          close: true,
          gravity: "bottom",
          position: "center",
          stopOnFocus: true,
          offset: {
            y: 50,
          },
          className: "form-submit-toast",
          node: div,
        }).showToast();
      }
    } catch (error) {
      Toastify({
        text: "Something went wrong",
        duration: 6000,
        close: true,
        gravity: "bottom",
        position: "center",
        stopOnFocus: true,
        offset: {
          y: 50,
        },
        className: "form-submit-toast",
      }).showToast();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="checkout-form__inner">
        <div className="checkout-form__box">
          <h4 className='checkout-form__title'>Billing details</h4>
          <p className='checkout-form__sub-title'>Please fill in your contact details to finalize your order. This information is used only for shipping and to contact you regarding your order.</p>
          <div className="checkout-form__items">
            <label className='checkout-form__input--required'>
              <input
                className="checkout-form__input "
                type="text"
                placeholder="First name"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && <span className="form-help">First name is required</span>}
            </label>
            <label className="checkout-form__input--required">
              <input
                className="checkout-form__input"
                type="text"
                placeholder="Last name"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && <span className="form-help">Last name is required</span>}
            </label>
            <label className="checkout-form__input--required">
              <input
                className="checkout-form__input"
                type="email"
                placeholder="Email address"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="form-help">Email is required</span>}
            </label>
          </div>
        </div>

        <div className="checkout-form__box">
          <h5 className='checkout-form__title'>Delivery</h5>
          <div className="checkout-form__items">
            <label className="checkout-form__input--required">
              <input
                className="checkout-form__input"
                type="text"
                placeholder="City"
                {...register("city", { required: true })}
              />
              {errors.city && <span className="form-help">City is required</span>}
            </label>
            <label htmlFor="" className="checkout-form__input--required">
              <input
                className="checkout-form__input"
                type="text"
                placeholder="Address"
                {...register("address", { required: true })}
              />
              {errors.address && <span className="form-help">Address is required</span>}
            </label>
            <input
              className="checkout-form__input"
              type="text"
              placeholder="Apartments, suite"
              {...register("apartments")}
            />
            <label htmlFor="" className="checkout-form__input--required">
              <input
                className="checkout-form__input"
                type="tel"
                placeholder="Phone"
                {...register("phone", { required: true })}
              />
              {errors.phone && <span className="form-help">Phone number is required</span>}
            </label>
            <textarea
              className="checkout-form__textarea"
              placeholder="Notes about your order, e.g. special notes for delivery."
              {...register("notes")}
            />
          </div>
        </div>
      </div>
      <OrderTotal inCheckout={true} />
      <OrderSummary />
      <div className="checkout-form__payment">
        <input className='checkout-form__payment-input' type="checkbox" checked disabled />
        <div className="checkout-form__payment-box">
          <h4 className='checkout-form__payment-title'>E-Transfer Payment Instructions</h4>
          <p className="checkout-form__payment-text">
            To complete your order, please follow the simple steps for payment via E-Transfer. Send the total amount of <b style={{ color: 'blue' }}>{orderNumber}</b> to our e-transfer account: <b style={{ color: 'blue' }}>info@eva-tech.ca</b>. Please include your order number in the transfer message. You will receive an order number after you submit your order.
          </p>
        </div>

      </div>
      <button className={`checkout-form__btn ${loading ? 'checkout-form__btn--loading' : ''}`} type="submit">{loading ? <Spinner /> : 'Place order'}</button>
    </form>
  );
};

export default BillingForm;
