import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalOverlay, ModalBody } from './Modal.styled';

//----for portal----//
const modalRoot = document.querySelector('#modalRoot');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeByEsc);
    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  });

  const closeByEsc = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const closeByBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return createPortal(
    <ModalOverlay onClick={closeByBackdrop}>
      <ModalBody>{children}</ModalBody>
    </ModalOverlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
