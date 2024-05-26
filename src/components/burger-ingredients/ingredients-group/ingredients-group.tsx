import React from 'react';

import IngredientItem from '../ingredient-item/ingredient-item';
import { MAIN_TYPE, SAUCE_TYPE, BUN_TYPE, MAIN_TYPE_NAME, SAUCE_TYPE_NAME, BUN_TYPE_NAME } from '../../../utils/constants';
import groupStyles from './ingredients-group.module.css';
import { IngredientCountedProps } from '../../../utils/interface';


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
  categoryIngredients: Array<IngredientCountedProps>,
  categoryName: string
}

const IngredientGroup = (props: IngredientGroupProps) => {
  return (
    <>
      <IngredientGroupHeader categoryName={props.categoryName} />
      <div className={`${groupStyles.group} mt-6 mb-10 ml-4 mr-4`}>
        {props.categoryIngredients.map((ingredient: IngredientCountedProps, index: number) => (
          <IngredientItem key={index} ingredient={ingredient} />
        ))}
      </div>
    </>
  )
}

export default IngredientGroup;
