import React from 'react';

import appStyles from './app.module.css';
import ingredients from '../../utils/data.js';

import AppHeader from '../header/header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';


function App() {
  const [pickedBun, setPickedBun] = React.useState(ingredients.filter(x => x.type === 'bun')[0]);
  const [pickedIngredients, setPickedIngredients] = React.useState(ingredients.filter(x => x.type !== 'bun').splice(0, 5));

  return (
    <main>
      <header className={appStyles.appHeader}>
        <AppHeader />
      </header>
      <body className={`${appStyles.appBody} flex`} style={{justifyContent: 'flex-between', gap: '40px'}}>
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
      </body>
    </main>
  );
}

export default App;
