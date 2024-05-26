import React from 'react';
import { createPortal } from 'react-dom';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { REACT_MODALS_ID } from '../../../utils/constants';
import modalStyles from './modal.module.css';


interface ModalHeaderProps {
  title: string | null,
  onClose: any,
}

const ModalHeader = ({ title, onClose }: ModalHeaderProps) => {
  return (
    <span className={modalStyles.header}>
      <p className="text text_type_main-medium">{title && title}</p>
      <span className={modalStyles.icon}>
        <CloseIcon type="primary" onClick={onClose}/>
      </span>
    </span>
  );
}

interface ModalLayoutProps {
  onClose: any,
}

const ModalLayout = ({ onClose }: ModalLayoutProps) => {
  return (
    <span className={modalStyles.modalOverlay} onClick={onClose}>&nbsp;</span>
  )
}

interface ModalProps {
  title: string | null,
  children: Array<any>,
  onClose: Function,
}

const Modal = ({ title, children, onClose }: ModalProps) => {
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
