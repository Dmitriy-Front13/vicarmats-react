import { useTimer } from 'react-timer-hook';
import Modal from 'react-modal';
import { useState } from 'react';
import GetGiftModal from '../modals/GetGiftModal';

import './getGift.scss';



function getEndOfMonth() {
  const now = new Date();
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return endOfMonth;
}


const Timer = () => {
  const expiryTimestamp = getEndOfMonth();

  const {
    seconds,
    minutes,
    hours,
    days,
    restart
  } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      restart(getEndOfMonth());
    }
  });

  return (
    <div className="get-gift__timer">
      <div>
        <span className="days">{days}</span>
        <p className="timer__text">d :</p>
      </div>
      <div>
        <span className="hours">{hours}</span>
        <p className="timer__text">h :</p>
      </div>
      <div>
        <span className="minutes">{minutes}</span>
        <p className="timer__text">m :</p>
      </div>
      <div>
        <span className="seconds">{seconds}</span>
        <p className="timer__text">s</p>
      </div>
    </div>
  )
}

const GetGift = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="get-gift section">
      <div className="get-gift__inner">
        <Timer />
        <h2 className="get-gift__title section__title">Get your gift for summer!!
        </h2>
        <p className="get-gift__text">Buy now our product and get a complimentary heel pad</p>
        <button className="get-gift__button"
          onClick={() => setModalOpen(true)}>
          Get gift
        </button>
      </div>

      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
        overlayElement={
          (props, contentElement) => <div {...props}>
            <button className="modal__close">
              <span className='modal__closeIcon'>
                <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.3 9.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3L5 6.4l3.3 3.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L6.4 5l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L5 3.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L3.6 5 .3 8.3c-.4.4-.4 1 0 1.4z" fill="#fff" fill-rule="nonzero"></path></svg>
              </span>
            </button>
            {contentElement}
            </div>}>
        <GetGiftModal />
      </Modal>
    </section>
  )
}

export default GetGift;