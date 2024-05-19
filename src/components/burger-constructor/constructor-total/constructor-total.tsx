import React from 'react';

import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import contructorTotalStyles from './constructor-total.module.css';


interface ConstructorTotalProps {
  amount: number
}

const ConstructorTotal = (props: ConstructorTotalProps) => {
  return (
    <div className={`${contructorTotalStyles.container} flex`}>
      <p className="text text_type_digits-medium mr-1">{props.amount}</p>
      <CurrencyIcon type='primary' />
      <Button htmlType="button" type="primary" size="medium">Оформить заказ</Button>
    </div>
  )
}

export default ConstructorTotal;
