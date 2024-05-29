import React, { useState, useMemo, useCallback } from 'react';

import { BUN_TYPE } from '../../utils/constants';
import IngredientGroup from './ingredients-group/ingredients-group';
import ingredientsStyles from './burger-ingredients.module.css';
import BurgerTabs from './burger-tabs/burger-tabs';
import Modal from '../hocs/modal/modal';
import IngredientDetails from './ingredient-details/ingredient-details';
import { IngredientProps, IngredientCountedProps } from '../../utils/interface';


interface BurgerIngredientsProps {
  ingredients: Array<IngredientProps>
  pickedBun: IngredientProps
  setPickedBun: Function
  pickedIngredients: Array<IngredientProps>
  setPickedIngredients: Function
}

const BurgerIngredients = (props: BurgerIngredientsProps) => {
  const [current, setCurrent] = useState(BUN_TYPE);
  const allPickedIngredients = useMemo(
    () => props.pickedBun ? [...props.pickedIngredients, props.pickedBun] : props.pickedIngredients,
    [props.pickedBun, props.pickedIngredients]
  );
  const categorisedIngredients: {[key: string]: Array<IngredientCountedProps>} = useMemo(
    () => props.ingredients.reduce((acc, currentValue) => {
      const count = allPickedIngredients.filter(x => x._id === currentValue._id).length;
      (acc[currentValue.type] = acc[currentValue.type] || []).push({...currentValue, count: count});
      return acc;
    }, {}),
    [props.ingredients, allPickedIngredients]
  );
  const [modalIngredient, setModalIngredient] = useState(null);

  const handleCloseModal = useCallback(() => {
    setModalIngredient(null);
  }, [setModalIngredient]);

  const handleOpenModal = useCallback((ingredient) => {
    setModalIngredient(ingredient);
  }, [setModalIngredient]);

  return (
    <>
      <p className='text text_type_main-large mt-10 mb-5'>Соберите бургер</p>
      <BurgerTabs current={current} setCurrent={setCurrent} />
      <div className={`${ingredientsStyles.ingredientsScroll} custom-scroll mt-10`}>
        {Object.entries(categorisedIngredients).map(([categoryName, categoryIngredients]) => (
          <IngredientGroup
            key={categoryName}
            categoryName={categoryName}
            categoryIngredients={categoryIngredients}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </div>
      {modalIngredient && (
        <Modal title="Детали ингридиента" onClose={handleCloseModal}>
          <IngredientDetails ingredient={modalIngredient} />
        </Modal>
      )}
    </>
  );
}

export default BurgerIngredients;
