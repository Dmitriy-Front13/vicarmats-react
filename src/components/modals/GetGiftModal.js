
import footrest from '../../assets/images/footrest.png';
import ok from '../../assets/images/comparison-ok.png';

import './modal.scss';



const GetGiftModal = () => {
  return (
    <>
      <h2 className="modal__title">Footrest
      </h2>
      <p className="text modal__text">Designed to to protect the driver's mat from being pierced
        or damaged, by the heel of a shoe. They are located close to
        the accelerator pedal and the foot rest area.</p>
      <div className="modal__items">
        <div className="modal__image">
          <img src={footrest} alt="Footrest" />
        </div>
        <ul className="property-list text">
          <li className='property-list__item'>
            <img className="card-comparison__icon"
              src={ok} alt="Okay" />size 25x16 cm

          </li>
          <li className='property-list__item'>
            <img className="card-comparison__icon"
              src={ok} alt="Okay" />thickness of 3 mm

          </li>
          <li className='property-list__item'>
            <img className="card-comparison__icon"
              src={ok} alt="Okay" />anti-slip rubber inserts
          </li>
          <li className='property-list__item'>
            <img className="card-comparison__icon"
              src={ok} alt="Okay" />set mounts - 4pcs
          </li>
          <li className='property-list__item'>
            <img className="card-comparison__icon"
              src={ok} alt="Okay" />warranty period with footrest 12 months
          </li>
          <h3 className="modal__title">Price: <span className="text-line-through">15 $</span> 0$</h3>
        </ul>
      </div>
      <button className="shopNow-btn">
        <a href="#price-constructor" className="shohNow-link">Show now</a>
      </button>
    </>
  )
}

export default GetGiftModal;