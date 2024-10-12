import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updatePrice, updatePromo } from '../priceConstructor/priceConstructorSlice';

import './orderPromo.scss';

const OrderPromo = () => {
  const dispatch = useDispatch();

  const shippingCost = useSelector((state) => state.priceConstructor.price.product);
  const usePromo = useSelector((state) => state.priceConstructor.promo.usePromo);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setErrorState] = useState(false);

  const onSubmit = async (data) => {
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
      } else {
        setErrorState(true);
      }
    } catch (err) {
      setErrorState(true);
    }
  };

  return (
    <form className="order-promo" onSubmit={handleSubmit(onSubmit)}>
      <label className="order-promo__label">Promocode</label>
      <input
        className="order-promo__input"
        type="text"
        {...register('promoCode')}
        placeholder="If you have a promo code - enter here"
      />
      {error && <p className="promoInvalid">Promocode invalid</p>}
      <button type="submit"
        className={`order-promo__btn ${usePromo ? 'promoValid' : ''}`}
        disabled={usePromo}>
        {usePromo ? 'Promocode valid!' : 'Check promocode'}
      </button>
    </form>
  );
};

export default OrderPromo;