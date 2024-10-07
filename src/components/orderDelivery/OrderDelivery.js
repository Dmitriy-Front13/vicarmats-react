
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
    <div className="container">
      <form className="order__total-item--promo" onSubmit={handleSubmit(onSubmit)}>
        <div className="promo__inputs">
          <label className="modalBuy__form-label">Calculate delivery</label>
          <input
            className="modalBuy__form-input"
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
        </div>
        {errors.postalCode && (
          <p className="promoInvalid">{errors.postalCode.message}</p>
        )}
        <button
          type="submit"
          className="promo__btn"
          disabled={isShipping}>
          Calculate delivery
        </button>
      </form>
    </div>
  )
}

export default OrderDelivery;

