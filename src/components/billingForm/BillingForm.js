import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import axios from 'axios';

import Spinner from '../spinner/Spinner';
import OrderSummary from '../orderSummary/OrderSummary';
import OrderTotal from "../orderTotal/OrderTotal";

import { billingDetailsFields, billingDeliveryFields } from './billingFormConfig';
import { showToast } from '../../utils/showToast';
import { getCurrentDate } from '../../utils/getCurrentDate';
import useFormSubmit from '../../hook/useFormSubmit';


import './billingForm.scss';



const BillingForm = () => {
  const initialOptions = {
    "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
    "enable-funding": "venmo",
    "disable-funding": "",
    "buyer-country": "US",
    currency: "USD",
    "data-page-type": "product-details",
    components: "buttons",
    "data-sdk-integration-source": "developer-studio",
  };
  const { register, handleSubmit, formState: { errors } } = useForm();

  const state = useSelector((state) => state.priceConstructor);
  const { carMake, carModel, carYear, carpetColor, carpetTrim, set, shipping, price, promo } = state;

  const [orderNumber, setOrderNumber] = useState(null);
  const { isLoading, submitForm } = useFormSubmit('https://vicarmats/server/action.php');

  useEffect(() => {
    const fetchOrderNumber = async () => {
      try {
        const response = await axios.get('https://eva-tech.ca/orderNumber.php');
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
    };
    const div = document.createElement("div");
    div.innerHTML = `
        Thank you for your order<br>
        Hi ${fullName},<br>
        Thanks for your order. It’s on-hold until we confirm that payment has been received.<br>
        <span class="bold">
          Please send your payment total amount to evatech@GMAIL.COM. No need to write anything in the message.<br>
          Secret Question: My order number ${orderNumber}<br>
          Secret Answer: Evatech
        </span><br>
        Product:<br>
        Car make - ${carMake.label}<br>
        Car model - ${carModel.label}<br>
        Car year - ${carYear.label}<br>
        Mat color - ${carpetColor}<br>
        Trim color - ${carpetTrim}<br>
        Set name - ${set} (+ Footrest for a driver mat as a gift!)
      `;
    submitForm(payload, () => axios.post('https://eva-tech.ca/orderNumber.php'), div);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="checkout-form__inner">
        <div className="checkout-form__box">
          <h4 className='checkout-form__title'>Billing details</h4>
          <p className='checkout-form__sub-title'>Please fill in your contact details to finalize your order. This information is used only for shipping and to contact you regarding your order.</p>
          <div className="checkout-form__items">
            {billingDetailsFields.map((field, index) => (
              <label key={index} className={field.required ? 'checkout-form__input--required' : ''}>
                <input
                  className="checkout-form__input"
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.name, { required: field.required })}
                />
                {errors[field.name] && <span className="form-help">{field.errorMessage}</span>}
              </label>
            ))}
          </div>
        </div>

        <div className="checkout-form__box">
          <h5 className='checkout-form__title'>Delivery</h5>
          <div className="checkout-form__items">
            {billingDeliveryFields.map((field, index) => (
              <label key={index} className={field.required ? 'checkout-form__input--required' : ''}>
                <input
                  className="checkout-form__input"
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.name, { required: field.required })}
                />
                {errors[field.name] && <span className="form-help">{field.errorMessage}</span>}
              </label>
            ))}
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
            To complete your order, please follow the simple steps for payment via E-Transfer. Send the total amount of <b style={{ color: 'blue' }}>{price.total}</b> to our e-transfer account: <b style={{ color: 'blue' }}>info@eva-tech.ca</b>. Please include your order number in the transfer message. You will receive an order number after you submit your order.
          </p>
        </div>

      </div>
   
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: price.total.toString(),
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                showToast(`Transaction completed by ${details.payer.name.given_name}`);
              });
            }}
          />
        </PayPalScriptProvider>

      {/* <button className={`checkout-form__btn ${isLoading ? 'checkout-form__btn--loading' : ''}`} type="submit">{isLoading ? <Spinner /> : 'Place order'}</button> */}
    </form>
  );
};

export default BillingForm;
