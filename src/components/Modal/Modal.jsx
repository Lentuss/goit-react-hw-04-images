import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalOverlay, ModalBody } from './Modal.styled';

//----for portal----//
const modalRoot = document.querySelector('#modalRoot');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEsc);
  }

  closeByEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  closeByBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <ModalOverlay onClick={this.closeByBackdrop}>
        <ModalBody>{this.props.children}</ModalBody>
      </ModalOverlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
