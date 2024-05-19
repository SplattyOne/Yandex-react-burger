import React from 'react';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import itemStyles from './ingredient-item.module.css';

interface IngredientItemProps {
  ingredient: any
  count: number
}

const IngredientItem = (props: IngredientItemProps) => {
  return (
    <div key={props.ingredient._id} style={{flex: '0 0 47%'}}>
      <span className={`${itemStyles.item} ${itemStyles.counter} flex pl-4 pr-4`}>
        <img src={props.ingredient.image} alt={props.ingredient.name} />
        {props.count > 0 && <Counter count={props.count} size="default" />}
      </span>
      <span className={`${itemStyles.item} flex mt-1 mb-1`}>
        <p className='text text_type_digits-default mr-1'>{props.ingredient.price}</p>
        <CurrencyIcon type='primary' />
      </span>
      <span className={`${itemStyles.item} flex`}>
        <p className={`${itemStyles.itemName} text text_type_main-default`}>{props.ingredient.name}</p>
      </span>
    </div>
  )
}

export default IngredientItem
