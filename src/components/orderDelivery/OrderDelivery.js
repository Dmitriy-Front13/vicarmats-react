
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { updateShipping } from '../priceConstructor/priceConstructorSlice';

const OrderDelivery = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const isShipping = useSelector((state) => state.priceConstructor.shipping.postalCode);

  const calculateShipping = (postalCode) => {
    const cleanedPostalCode = postalCode.toUpperCase().replace(/\s+/g, '');
    const firstTwo = cleanedPostalCode.substring(0, 2);
    let shippingCost;

    if (firstTwo === 'K7') {
      shippingCost = 0;
    } else if (['K', 'M'].includes(cleanedPostalCode[0]) || ['L1', 'L3P', 'L3R', 'L3S', 'L6B', 'L6C', 'L6E'].includes(cleanedPostalCode.substring(0, 3))) {
      shippingCost = 15.5;
    } else {
      shippingCost = 20.5;
    }

    return shippingCost;
  };
  const onSubmit = (data) => {
    const result = calculateShipping(data.postalCode);

    dispatch(updateShipping({
      postalCode: data.postalCode,
      shippingPrice: result
    }));

    reset();
  };
  return (
    <form className="order-promo order-delivery" onSubmit={handleSubmit(onSubmit)}>
      <label className="order-promo__label order-delivery__label">To provide an accurate shipping cost, please enter your postal code. This information is used solely for calculating your delivery charges.</label>
      <input
        className="order-promo__input"
        type="text"
        placeholder="Postal code"
        disabled={isShipping}
        {...register('postalCode', {
          required: 'Postal code is required',
          pattern: {
            value: /^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/,
            message: 'Invalid postal code format',
          },
        })} />
      {errors.postalCode && (
        <p className="promoInvalid">{errors.postalCode.message}</p>
      )}
      <button
        type="submit"
        className="order-promo__btn"
        disabled={isShipping}>
        Calculate delivery
      </button>
    </form>
  )
}

export default OrderDelivery;
