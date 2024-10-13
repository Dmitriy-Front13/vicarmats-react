
import { useSelector } from 'react-redux';

import Popover from '../Popover/Popover';

import './orderProduct.scss'
const OrderProduct = () => {

  const carMake = useSelector((state) => state.priceConstructor.carMake.label);
  const carYear = useSelector((state) => state.priceConstructor.carYear.label);
  const set = useSelector((state) => state.priceConstructor.set);
  const carpetColor = useSelector((state) => state.priceConstructor.carpetColor);
  const carpetTrim = useSelector((state) => state.priceConstructor.carpetTrim);

  return (

    <div className="order-product">
      <ul className="order-product__items">
        <li className="order-product__item">
          Car make
          <span className="order-product__desc">{carMake}</span>
        </li>
        <li className="order-product__item">
          Car year
          <span className="order-product__desc">{carYear}</span>
        </li>
        <li className="order-product__item">
          Carpet color
          <span className="order-product__desc">{carpetColor}</span>
        </li>
        <li className="order-product__item">
          Carpet trim
          <span className="order-product__desc">{carpetTrim}</span>
        </li>
        <li className="order-product__item">
          Set name
          <span className="order-product__desc">{set}</span>
        </li>
        <li className="order-product__item">
          Production Time
          <span className="order-product__desc order-product__desc--time">2 - 4 days
            <Popover className="order-product__tooltip">
              The production of your car mats will take no longer than 5 business days. We aim to make this process as fast and convenient as possible!
            </Popover>
          </span>
        </li>
      </ul>
    </div>
  )
}

export default OrderProduct;

