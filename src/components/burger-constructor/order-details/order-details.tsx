import React from "react";

import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import orderStyles from './order-details.module.css';


interface OrderDetailsProps {
}

const OrderDetails = (props: OrderDetailsProps) => {
  return (
    <div>
      <span className={`${orderStyles.content} mb-8 mt-5`}>
        <p className="text text_type_digits-large">034536</p>
      </span>
      <span className={`${orderStyles.content}`}>
        <p className="text text_type_main-medium">Идентификатор заказа</p>
      </span>
      <span className={`${orderStyles.content} mt-15 mb-15`}>
        <CheckMarkIcon type="primary" />
      </span>
      <span className={`${orderStyles.content} mb-2`}>
        <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      </span>
      <span className={`${orderStyles.content} mb-20`}>
        <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбительной станции</p>
      </span>
    </div>
  )
}

export default OrderDetails;
