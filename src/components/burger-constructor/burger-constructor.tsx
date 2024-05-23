import React from 'react';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorTotal from './constructor-total/constructor-total';
import constructorStyles from './burger-constructor.module.css';



interface BurgerConstructorProps {
  pickedBun: any
  pickedIngredients: Array<any>
}

function BurgerConstructor(props: BurgerConstructorProps) {
  const amount: number = props.pickedIngredients.reduce((acc, currentValue) => {
    return acc + currentValue.price;
  }, 0) + props.pickedBun.price * 2;

  return (
    <>
    <div className={`${constructorStyles.scroll} ${constructorStyles.column} mt-25 custom-scroll`}>
      <span className={`${constructorStyles.item} mr-4 ml-4 pl-8`}>
        <ConstructorElement
          type='top'
          isLocked={true}
          text={`${props.pickedBun.name} (верх)`}
          price={props.pickedBun.price}
          thumbnail={props.pickedBun.image}
        />
      </span>
      {props.pickedIngredients.map((item, index) =>
        <span className={`${constructorStyles.item} mr-4 ml-4`}>
          <DragIcon type="primary" />
          <ConstructorElement
            key={index}
            isLocked={false}
            text={item.name}
            price={item.price}
            thumbnail={item.image}
          />
        </span>
      )}
      <span className={`${constructorStyles.item} mr-4 ml-4 pl-8`}>
        <ConstructorElement
          type='bottom'
          isLocked={true}
          text={`${props.pickedBun.name} (низ)`}
          price={props.pickedBun.price}
          thumbnail={props.pickedBun.image}
        />
      </span>
    </div>
    <ConstructorTotal amount={amount}/>
    </>
  );
}

export default BurgerConstructor;
