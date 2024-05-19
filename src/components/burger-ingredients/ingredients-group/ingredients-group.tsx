import React from 'react';

import IngredientItem from '../ingredient-item/ingredient-item';
import { MAIN_TYPE, SAUCE_TYPE, BUN_TYPE, MAIN_TYPE_NAME, SAUCE_TYPE_NAME, BUN_TYPE_NAME } from '../../../utils/constants';


interface IngredientGroupHeaderProps {
  categoryName: string
}

const IngredientGroupHeader = (props: IngredientGroupHeaderProps) => {
  return (
    <p className='text text_type_main-medium mt-10'>
      {props.categoryName === MAIN_TYPE && MAIN_TYPE_NAME}
      {props.categoryName === SAUCE_TYPE && SAUCE_TYPE_NAME}
      {props.categoryName === BUN_TYPE && BUN_TYPE_NAME}
    </p>
  )
}

interface IngredientGroupProps {
  ingredients: Array<any>,
  categoryName: string
}

const IngredientGroup = (props: IngredientGroupProps) => {
  return (
    <div>
      <IngredientGroupHeader categoryName={props.categoryName} />
      <span className='flex wrap mt-6 mb-10 ml-4' style={{rowGap: '24px', columnGap: '32px'}}>
        {props.ingredients.map((ingredient: any) => (
          <IngredientItem ingredient={ingredient} count={1} />
        ))}
      </span>
    </div>
  )
}

export default IngredientGroup;
