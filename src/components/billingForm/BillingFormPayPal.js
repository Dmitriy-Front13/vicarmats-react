import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from 'react-redux';
import axios from 'axios';

import OrderSummary from '../orderSummary/OrderSummary';
import OrderTotal from "../orderTotal/OrderTotal";

import { getCurrentDate } from '../../utils/getCurrentDate';
import { showToast } from '../../utils/showToast';

import securityImg from '../../assets/images/security.jpg';

const BillingFormPayPal = () => {
  const state = useSelector((state) => state.priceConstructor);
  const { carMake, carModel, carYear, carpetColor, carpetTrim, set, shipping, price, promo } = state;

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
  });

  const handleOrder = async (details) => {
    try {
      const email = details.payer.email_address; 
      const response = await axios.post('https://eva-tech.ca/action.php', createPayload(email));
      if (response.status === 200) {
        showToast(`Transaction completed by ${details.payer.name.given_name}`);
      }
    } catch (error) {
      console.error('Error processing order:', error);
      showToast('An error occurred while processing your order. Please try again.');
    }
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