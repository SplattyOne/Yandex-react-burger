import React, { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { REACT_MODALS_ID } from '../../../utils/constants';
import modalStyles from './modal.module.css';
import ModalHeader from './modal-header/modal-header';
import ModalLayout from './modal-layout/modal-layout';


interface ModalProps {
  title: string | null,
  onClose: () => void,
}

const Modal = ({ title, children, onClose }: PropsWithChildren<ModalProps>) => {
  return createPortal(
    (
      <>
          <span className={`${modalStyles.modal} p-10 pb-10`}>
            <ModalHeader title={title} onClose={onClose} />
            {children}
          </span>
          <ModalLayout onClose={onClose} />
      </>
    ),
    document.getElementById(REACT_MODALS_ID) || document.documentElement
  );
};

export default Modal
