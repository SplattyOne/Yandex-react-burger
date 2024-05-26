import React from 'react';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorTotal from './constructor-total/constructor-total';
import constructorStyles from './burger-constructor.module.css';
import { IngridientProps } from '../../utils/interface';


interface BurgerConstructorProps {
  pickedBun: IngridientProps
  pickedIngredients: Array<IngridientProps>
}

const BurgerConstructor = ({pickedBun, pickedIngredients}: BurgerConstructorProps) => {
  const pickedBunPrice = pickedBun ? pickedBun.price : 0;
  const amount: number = pickedIngredients.reduce((acc, currentValue) => {
    return acc + currentValue.price;
  }, 0) + pickedBunPrice * 2;

  return (
    <>
    <div className={`${constructorStyles.scroll} ${constructorStyles.column} mt-25 custom-scroll`}>
      {pickedBun &&
      <span className={`${constructorStyles.item} mr-4 ml-4 pl-8`}>
        <ConstructorElement
          type='top'
          isLocked={true}
          text={`${pickedBun.name} (верх)`}
          price={pickedBun.price}
          thumbnail={pickedBun.image}
        />
      </span>
      }
      {pickedIngredients.map((item, index) =>
        <span key={index} className={`${constructorStyles.item} mr-4 ml-4`}>
          <DragIcon type="primary" />
          <ConstructorElement
            isLocked={false}
            text={item.name}
            price={item.price}
            thumbnail={item.image}
          />
        </span>
      )}
      {pickedBun &&
      <span className={`${constructorStyles.item} mr-4 ml-4 pl-8`}>
        <ConstructorElement
          type='bottom'
          isLocked={true}
          text={`${pickedBun.name} (низ)`}
          price={pickedBun.price}
          thumbnail={pickedBun.image}
        />
      </span>
      }
    </div>
    <ConstructorTotal amount={amount}/>
    </>
  );
}

export default BurgerConstructor;
