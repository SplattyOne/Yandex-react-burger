import React, { useState, useCallback } from 'react';

import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import contructorTotalStyles from './constructor-total.module.css';
import OrderDetails from '../order-details/order-details';


interface ConstructorTotalProps {
  amount: number
}

const ConstructorTotal = (props: ConstructorTotalProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, [setModalOpen]);

  const handleOpenModal = useCallback(() => {
    setModalOpen(true);
  }, [setModalOpen]);

  return (
    <>
    <div className={`${contructorTotalStyles.container} mt-10`}>
      <p className="text text_type_digits-medium mr-2">{props.amount}</p>
      <CurrencyIcon type='primary' />
      <span className="mr-4 ml-10">
        <Button htmlType="button" type="primary" size="medium" onClick={handleOpenModal}>Оформить заказ</Button>
      </span>
    </div>
    <OrderDetails modalOpen={modalOpen} onClose={handleCloseModal} />
    </>
  )
}

export default ConstructorTotal;
