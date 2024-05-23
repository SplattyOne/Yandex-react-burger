import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { MAIN_TYPE, SAUCE_TYPE, BUN_TYPE, MAIN_TYPE_NAME, SAUCE_TYPE_NAME, BUN_TYPE_NAME } from '../../utils/constants';
import IngredientGroup from './ingredients-group/ingredients-group';
import ingredientsStyles from './burger-ingredients.module.css';


interface BurgerTabsProps {
  current: string,
  setCurrent: any
}

const BurgerTabs = (props: BurgerTabsProps) => {
  return (
    <div className='flex mt-5'>
      <Tab value={BUN_TYPE} active={props.current === BUN_TYPE} onClick={props.setCurrent}>
        {BUN_TYPE_NAME}
      </Tab>
      <Tab value={SAUCE_TYPE} active={props.current === SAUCE_TYPE} onClick={props.setCurrent}>
        {SAUCE_TYPE_NAME}
      </Tab>
      <Tab value={MAIN_TYPE} active={props.current === MAIN_TYPE} onClick={props.setCurrent}>
        {MAIN_TYPE_NAME}
      </Tab>
    </div>
  )
}

interface BurgerIngredientsProps {
  ingredients: Array<any>
  pickedBun: any
  setPickedBun: any
  pickedIngredients: Array<any>
  setPickedIngredients: any
}

function BurgerIngredients(props: BurgerIngredientsProps) {
  const [current, setCurrent] = React.useState(BUN_TYPE);
  const allPickedIngredients = props.pickedBun ? [...props.pickedIngredients, props.pickedBun] : props.pickedIngredients;
  const categorisedIngredients: Object = props.ingredients.reduce((acc, currentValue) => {
    currentValue.count = allPickedIngredients.filter(x => x._id === currentValue._id).length;
    (acc[currentValue.type] = acc[currentValue.type] || []).push(currentValue);
    return acc;
  }, {});

  return (
    <>
      <p className='text text_type_main-large mt-10'>Соберите бургер</p>
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
