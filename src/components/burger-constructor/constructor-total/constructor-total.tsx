import React from 'react';

import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import contructorTotalStyles from './constructor-total.module.css';


interface ConstructorTotalProps {
  amount: number
}

const ConstructorTotal = (props: ConstructorTotalProps) => {
  return (
    <div className={`${contructorTotalStyles.container} mt-10`}>
      <p className="text text_type_digits-medium mr-2">{props.amount}</p>
      <CurrencyIcon type='primary' />
      <span className="mr-4 ml-10">
        <Button htmlType="button" type="primary" size="medium">Оформить заказ</Button>
      </span>
    </div>
  )
}

export default ConstructorTotal;
