import Modal from 'react-modal';
import css from './ImageModal.module.css';

function ImageModal({ modalIsOpen, closeModal, modalImgUrl, altDescription }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      height: '90%',
      border: 'none',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      padding: '0',
    },

    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Photo Modal"
      >
        <img className={css.imgModal} src={modalImgUrl} alt={altDescription} />
      </Modal>
    </div>
  );
}

export default ImageModal;
