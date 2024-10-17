import { forwardRef, useImperativeHandle } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { updateShipping } from '../priceConstructor/priceConstructorSlice';

const OrderDelivery = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  const isShipping = useSelector((state) => state.priceConstructor.shipping.postalCode);
  const set = useSelector((state) => state.priceConstructor.set);
  const shippingPrice = useSelector((state) => state.priceConstructor.shipping.shippingPrice);

  const calculateShipping = (postalCode, selectedSet) => {
    const cleanedPostalCode = postalCode.toUpperCase().replace(/\s+/g, '');
    const firstTwo = cleanedPostalCode.substring(0, 2);
    let shippingCost;


    if (['Standart', 'Premium'].includes(selectedSet)) {
      shippingCost = 0;
    } else if (firstTwo === 'K7') {
      shippingCost = 0;
    } else if (['K', 'M'].includes(cleanedPostalCode[0]) || ['L1', 'L3P', 'L3R', 'L3S', 'L6B', 'L6C', 'L6E'].includes(cleanedPostalCode.substring(0, 3))) {
      shippingCost = 19.5;
    } else {
      shippingCost = 22.5;
    }

    return shippingCost;
  };

  const onSubmit = (data) => {
    const result = calculateShipping(data.postalCode, set);

    dispatch(updateShipping({
      postalCode: data.postalCode,
      shippingPrice: result
    }));

    reset();
  };

  useImperativeHandle(ref, () => ({
    validateAndSubmit: () => handleSubmit(onSubmit)(),
  }));

  const handleInput = (e) => {
    const uppercaseValue = e.target.value.toUpperCase();
    setValue('postalCode', uppercaseValue);
  };

  return (
    <form className="order-promo__form order-delivery" onSubmit={handleSubmit(onSubmit)}>
      <label className="order-promo__label order-delivery__label">To provide an accurate shipping cost, please enter your postal code. This information is used solely for calculating your delivery charges.</label>
      <input
        className="order-promo__input"
        type="text"
        placeholder="Postal code"
        onInput={handleInput}
        {...register('postalCode', {
          required: 'Postal code is required',
          pattern: {
            value: /^[A-Z]\d[A-Z]\s?\d[A-Z]\d$/,
            message: 'Invalid postal code format',
          },
        })}
      />
      {shippingPrice === 0 && (
        <p className="free-shipping">Free delivery applies to postal code {isShipping}</p>
      )}
      {errors.postalCode && (
        <p className="promoInvalid">{errors.postalCode.message}</p>
      )}
      <button
        type="submit"
        className="order-promo__btn"
      >
        {!isShipping ? 'Calculate delivery' : 'Recalculate delivery'}
      </button>
    </form>
  );
});

export default OrderDelivery;
