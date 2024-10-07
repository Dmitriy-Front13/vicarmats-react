
import { useSelector } from 'react-redux';

import './orderProduct.scss'
const OrderProduct = () => {
  const carMake = useSelector((state) => state.priceConstructor.carMake.label);
  const carYear = useSelector((state) => state.priceConstructor.carYear.label);
  const set = useSelector((state) => state.priceConstructor.set);
  const carpetColor = useSelector((state) => state.priceConstructor.carpetColor);
  const carpetTrim = useSelector((state) => state.priceConstructor.carpetTrim);
  return (
    <div className="container">
      <h1 className='title order__title'>Step 4 of 5: Calculate the Shipping Cost for Your Order</h1>
      <h2 className="sub-title order__sub-title">To provide an accurate shipping cost, please enter your postal code. This information is used solely for calculating your delivery charges.</h2>
      <div className="order__product">
        <div className="order__product-items">
          <div className="order__product-item">
            <p className="total-text">Car make</p>
            <p className="order__product-desc">{carMake}</p>
          </div>
          <div className="order__product-item">
            <p className="total-text">Car year</p>
            <p className="order__product-desc">{carYear}</p>
          </div>
          <div className="order__product-item">
            <p className="total-text">Color</p>
            <p className="order__product-desc">{carpetColor} on {carpetTrim}</p>
          </div>
          <div className="order__product-item">
            <p className="total-text">Set name</p>
            <p className="order__product-desc">{set}</p>
          </div>
          <div className="order__product-item">
            <p className="total-text">Production Time</p>
            <p className="order__product-desc order__product-desc--time">The production of your car mats will take no longer than 5 business days. We aim to make this process as fast and convenient as possible!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderProduct;