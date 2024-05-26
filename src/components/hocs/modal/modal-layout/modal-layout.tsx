import React from 'react';

import modalStyles from './modal-layout.module.css';


interface ModalLayoutProps {
  onClose: () => void,
}

const ModalLayout = ({ onClose }: ModalLayoutProps) => {
  return (
    <span className={modalStyles.modalOverlay} onClick={onClose}>&nbsp;</span>
  )
}

export default ModalLayout;
