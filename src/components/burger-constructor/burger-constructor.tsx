import React from 'react';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import ConstructorTotal from './constructor-total/constructor-total';



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
    <div className='mt-25' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <ConstructorElement
        type='top'
        isLocked={true}
        text={`${props.pickedBun.name} (верх)`}
        price={props.pickedBun.price}
        thumbnail={props.pickedBun.image}
      />
      {props.pickedIngredients.map((item) => {
        return <ConstructorElement
          isLocked={false}
          text={item.name}
          price={item.price}
          thumbnail={item.image}
        />
      })}
      <ConstructorElement
        type='bottom'
        isLocked={true}
        text={`${props.pickedBun.name} (низ)`}
        price={props.pickedBun.price}
        thumbnail={props.pickedBun.image}
      />
    </div>
    <ConstructorTotal amount={amount}/>
    </>
  );
}

export default BurgerConstructor;
