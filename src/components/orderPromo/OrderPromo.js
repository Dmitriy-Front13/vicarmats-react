import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePrice, updatePromo } from '../priceConstructor/priceConstructorSlice';
import promoCodes from './promoCodes.json';

const OrderPromo = () => {
  const dispatch = useDispatch();

  const shippingCost = useSelector((state) => state.priceConstructor.price);
  const usePromo = useSelector((state) => state.priceConstructor.promo.usePromo);

  const [promoCode, setPromoCode] = useState('');
  const [error, setError] = useState(false);

  const handleApplyPromo = () => {

    const foundPromo = promoCodes.find((code) => code.code === promoCode.toUpperCase());

    if (foundPromo) {
      const discountAmount = (shippingCost * foundPromo.discountValue) / 100;
      const newPrice = Math.max(shippingCost - discountAmount, 0); 

      dispatch(updatePrice(newPrice));
      dispatch(updatePromo({
        usePromo: true,
        promoValue: foundPromo.code
      }));
      setPromoCode('');
    } else {
      setError(true);
    }
  };
  return (
    <div className="container">
      <div className="order__total-item--promo">
        <div className="promo__inputs">
          <label className="modalBuy__form-label" htmlFor="promo">Promocode</label>
          <input
            className="modalBuy__form-input"
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="If you have a promo code - enter here" />
        </div>
        {error && <p className="promoInvalid">Promocode invalid</p>}
        <button type="button"
          onClick={handleApplyPromo}
          className={`promo__btn ${usePromo ? 'promoValid' : ''}`}
          disabled={usePromo}>
          {usePromo ? 'Promocode valid!' : 'Check promo'}
        </button>
      </div>
    </div>
  )
}

export default OrderPromo;