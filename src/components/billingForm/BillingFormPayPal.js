import { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';

import OrderSummary from '../orderSummary/OrderSummary';
import OrderTotal from "../orderTotal/OrderTotal";

import { getCurrentDate } from '../../utils/getCurrentDate';

import securityImg from '../../assets/images/security.jpg';

const BillingFormPayPal = () => {
  const [orderNumber, setOrderNumber] = useState(null);

  const state = useSelector((state) => state.priceConstructor);
  const { carMake, carModel, carYear, carpetColor, carpetTrim, set, shipping, price, promo } = state;
  const navigate = useNavigate();

  const initialOptions = {
    "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
    currency: "CAD",
    components: "buttons",
  };

  const createPayload = (email) => ({
    formName: 'modalBuy',
    date: getCurrentDate(),
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
    email: email,
    orderNumber
  });

  const handleOrder = (details) => {
    navigate('/congratulations');
    const email = details.payer.email_address;
    axios.post('https://eva-tech.ca/action.php', createPayload(email));
    axios.post('https://eva-tech.ca/orderNumber.php');
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: price.total.toString(),
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(handleOrder);
  };
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
  return (
    <div className="checkout__wrapper">
      <OrderTotal inCheckout={true} />
      <OrderSummary />
      <div className="checkout__btns">
        <img className="checkout__security-img" src={securityImg} alt="100% security" />
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default BillingFormPayPal;