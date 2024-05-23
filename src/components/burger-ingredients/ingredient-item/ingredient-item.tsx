import React from 'react';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import itemStyles from './ingredient-item.module.css';

interface IngredientItemProps {
  ingredient: any
}

const IngredientItem = (props: IngredientItemProps) => {
  return (
    <span className={`${itemStyles.item}`}>
      <span className={`${itemStyles.itemContent} ${itemStyles.counter} pl-4 pr-4`}>
        <img src={props.ingredient.image} alt={props.ingredient.name} />
        {props.ingredient.count > 0 && <Counter count={props.ingredient.count} size="default" />}
      </span>
      <span className={`${itemStyles.itemContent} mt-1 mb-1`}>
        <p className='text text_type_digits-default mr-1'>{props.ingredient.price}</p>
        <CurrencyIcon type='primary' />
      </span>
      <span className={`${itemStyles.itemContent}`}>
        <p className={`${itemStyles.itemName} text text_type_main-default`}>{props.ingredient.name}</p>
      </span>
    </span>
  )
}

export default IngredientItem
