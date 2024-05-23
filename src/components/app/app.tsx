import React from 'react';

import appStyles from './app.module.css';
import ingredients from '../../utils/data';
import ErrorBoundary from '../../utils/error-boundary';

import AppHeader from '../header/header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

const getRandomElement = (arr: Array<any>) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const getRandomElements = (arr: Array<any>, count: number) => {
 return Array.apply(null, Array(count)).map(() => getRandomElement(arr));
}

function App() {
  const [pickedBun, setPickedBun] = React.useState(ingredients.filter(x => x.type === 'bun')[0]);
  const [pickedIngredients, setPickedIngredients] = React.useState(getRandomElements(ingredients.filter(x => x.type !== 'bun'), 5));

  return (
    <ErrorBoundary>
      <div className={appStyles.appHeader}>
        <AppHeader />
      </div>
      <div className={`${appStyles.appBody} flex`} style={{justifyContent: 'flex-between', gap: '40px'}}>
        <span style={{flex: '0 0 50%'}}>
          <BurgerIngredients
            ingredients={ingredients}
            pickedBun={pickedBun}
            setPickedBun={setPickedBun}
            pickedIngredients={pickedIngredients}
            setPickedIngredients={setPickedIngredients}
          />
        </span>
        <span style={{flex: '0 0 50%'}}>
          <BurgerConstructor pickedBun={pickedBun} pickedIngredients={pickedIngredients} />
        </span>
      </div>
      </ErrorBoundary>
  );
}

export default App;
