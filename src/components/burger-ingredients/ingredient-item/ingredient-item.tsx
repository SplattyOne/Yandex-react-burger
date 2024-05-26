import React, { useState, useCallback } from 'react';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../../hocs/modal/modal';
import itemStyles from './ingredient-item.module.css';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { IngredientCountedProps } from '../../../utils/interface';

interface IngredientItemProps {
  ingredient: IngredientCountedProps
}

const IngredientItem = (props: IngredientItemProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, [setModalOpen]);

  const handleOpenModal = useCallback(() => {
    setModalOpen(true);
  }, [setModalOpen]);

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
    {modalOpen && (
      <Modal title="Детали ингридиента" onClose={handleCloseModal}>
        <IngredientDetails ingredient={props.ingredient} />
      </Modal>
    )}
    </>
  )
}

export default IngredientItem
