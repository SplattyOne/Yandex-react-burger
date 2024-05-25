import React, { useState } from 'react';

import { BUN_TYPE } from '../../utils/constants';
import IngredientGroup from './ingredients-group/ingredients-group';
import ingredientsStyles from './burger-ingredients.module.css';
import BurgerTabs from './burger-tabs/burger-tabs';


interface BurgerIngredientsProps {
  ingredients: Array<any>
  pickedBun: any
  setPickedBun: any
  pickedIngredients: Array<any>
  setPickedIngredients: any
}

function BurgerIngredients(props: BurgerIngredientsProps) {
  const [current, setCurrent] = useState(BUN_TYPE);
  const allPickedIngredients = props.pickedBun ? [...props.pickedIngredients, props.pickedBun] : props.pickedIngredients;
  const categorisedIngredients: Object = props.ingredients.reduce((acc, currentValue) => {
    currentValue.count = allPickedIngredients.filter(x => x._id === currentValue._id).length;
    (acc[currentValue.type] = acc[currentValue.type] || []).push(currentValue);
    return acc;
  }, {});

  return (
    <>
      <p className='text text_type_main-large mt-10 mb-5'>Соберите бургер</p>
      <BurgerTabs current={current} setCurrent={setCurrent} />
      <div className={`${ingredientsStyles.ingredientsScroll} custom-scroll mt-10`}>
        {Object.entries(categorisedIngredients).map(([categoryName, categoryIngredients]) => (
          <IngredientGroup key={categoryName} categoryName={categoryName} categoryIngredients={categoryIngredients} />
        ))}
      </div>
    </>
  );
}

export default BurgerIngredients;
