import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { updatePrice, updatePromo } from '../priceConstructor/priceConstructorSlice';

import Spinner from '../spinner/Spinner';

import './orderPromo.scss';

const OrderPromo = () => {
  const dispatch = useDispatch();

  const shippingCost = useSelector((state) => state.priceConstructor.price.product);
  const usePromo = useSelector((state) => state.priceConstructor.promo.usePromo);

  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const { promoCode } = data;
    try {
      const response = await axios.get('https://eva-tech.ca/promoCodes.json');
      const promoCodes = response.data;

      const foundPromo = promoCodes.find((code) => code.code === promoCode.toUpperCase());

      if (foundPromo) {
        const discountAmount = (shippingCost * foundPromo.discountValue) / 100;
        const newPrice = Math.max(shippingCost - discountAmount, 0);

        dispatch(updatePrice({
          subtotal: newPrice
        }));
        dispatch(updatePromo({
          usePromo: true,
          promoValue: foundPromo.code,
          discount: discountAmount
        }));
        setLoading(false);
      } else {
        setError('promoCode', { type: 'manual', message: 'Promocode invalid' });
        setLoading(false);
      }
    } catch (err) {
      setError('promoCode', { type: 'manual', message: 'Something went wrong...' });
      setLoading(false);
    }
  };

  return (
    <form className="order-promo" onSubmit={handleSubmit(onSubmit)}>
      <label className="order-promo__label">Promocode</label>
      <input
        className="order-promo__input"
        type="text"
        {...register('promoCode', { required: 'Promocode is required' })}
        placeholder="If you have a promo code - enter here"
      />
      {usePromo && <p className="promoValid">Promocode valid!</p>}
      {errors.promoCode && <p className="promoInvalid">{errors.promoCode.message}</p>}
      <button type="submit"
        className={`order-promo__btn ${loading ? 'order-promo__btn--loading' : ''}`}
        disabled={usePromo}>
          {loading ? <Spinner /> : 'Check promocode'}
      </button>
    </form>
  );
};

export default OrderPromo;