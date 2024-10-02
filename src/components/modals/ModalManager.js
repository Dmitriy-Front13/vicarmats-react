import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from './modalSlice';
import ModalTemplate from './ModalTemplate';

const ModalManager = () => {
  const dispatch = useDispatch();
  const { isOpen, modalData } = useSelector((state) => state.modal);

  if (!isOpen) return null;

  return (
    <ModalTemplate
      modalOpen={isOpen}
      setModalOpen={() => dispatch(closeModal())}
      title={modalData.title}
      isDescription={modalData.description}
      image={modalData.image}
      items={modalData.items}
      oldPrice={modalData.oldPrice}
      price={modalData.price}
      isGift={modalData.isGift}
    />
  );
};

export default ModalManager;