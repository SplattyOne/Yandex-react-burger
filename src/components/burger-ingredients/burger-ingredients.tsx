import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { MAIN_TYPE, SAUCE_TYPE, BUN_TYPE, MAIN_TYPE_NAME, SAUCE_TYPE_NAME, BUN_TYPE_NAME } from '../../utils/constants';
import IngredientGroup from './ingredients-group/ingredients-group';


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
  pickedIngredients: any
  setPickedIngredients: any
}

function BurgerIngredients(props: BurgerIngredientsProps) {
  const [current, setCurrent] = React.useState(BUN_TYPE);
  const categoryIngredients: Object = props.ingredients.reduce((acc, currentValue) => {
    (acc[currentValue.type] = acc[currentValue.type] || []).push(currentValue);
    return acc;
  }, {})

  return (
    <div>
      <p className='text text_type_main-large mt-10'>Соберите бургер</p>
      <BurgerTabs current={current} setCurrent={setCurrent} />
      {Object.entries(categoryIngredients).map(([categoryName, ingredients]) => (
        <IngredientGroup categoryName={categoryName} ingredients={ingredients} />
      ))}
    </div>
  );
}

export default BurgerIngredients;
