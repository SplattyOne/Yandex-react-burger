import React from 'react';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import itemStyles from './ingredient-item.module.css';
import { IngredientCountedProps } from '../../../utils/interface';

interface IngredientItemProps {
  ingredient: IngredientCountedProps,
  handleOpenModal: (ingredient: IngredientCountedProps) => void
}

const IngredientItem = (props: IngredientItemProps) => {
  const handleOpenModal = () => {
    props.handleOpenModal(props.ingredient);
  }

  return (
    <>
    <div className={itemStyles.item} onClick={handleOpenModal}>
      <div className={`${itemStyles.itemContent} ${itemStyles.counter} pl-4 pr-4`}>
        <img src={props.ingredient.image} alt={props.ingredient.name} />
        {props.ingredient.count > 0 && <Counter count={props.ingredient.count} size="default" />}
      </div>
      <div className={`${itemStyles.itemContent} mt-1 mb-1`}>
        <p className='text text_type_digits-default mr-1'>{props.ingredient.price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <div className={`${itemStyles.itemContent}`}>
        <p className={`${itemStyles.itemName} text text_type_main-default`}>{props.ingredient.name}</p>
      </div>
    </div>
    </>
  )
}

export default IngredientItem
