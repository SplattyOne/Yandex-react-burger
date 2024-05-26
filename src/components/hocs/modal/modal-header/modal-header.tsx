import React from 'react';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import modalStyles from './modal-header.module.css';

interface ModalHeaderProps {
  title: string | null,
  onClose: () => void,
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

export default ModalHeader;
