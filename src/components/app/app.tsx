import React, { useState } from 'react';

import appStyles from './app.module.css';
import { getRandomElements } from '../../utils/random';
import { REACT_MODALS_ID } from '../../utils/constants';
import ErrorBoundary from '../../utils/error-boundary';
import { IngridientProps } from '../../utils/interface';


import AppHeader from '../header/header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';


interface IngredientsProps {
  isLoading: boolean,
  error: string | null,
  data: Array<IngridientProps>
}

function App() {
  const [ingredients, setIngredients] = useState<IngredientsProps>({
    isLoading: false,
    error: null,
    data: []
  });
  const [pickedBun, setPickedBun] = useState<any>(null);
  const [pickedIngredients, setPickedIngredients] = useState<Array<any>>([]);

  React.useEffect(() => {
    setIngredients({ ...ingredients, error: null, isLoading: true });
    (async () => {
      try {
        setIngredients({ ...ingredients, error: null, isLoading: true });
        const response = await fetch('https://norma.nomoreparties.space/api/ingredients');
        const data: {[key: string]: any} = await response.json();
        setIngredients({ ...ingredients, data: data.data, isLoading: false });
        setPickedBun(data.data.filter(x => x.type === 'bun')[0]);
        setPickedIngredients(getRandomElements(data.data.filter(x => x.type !== 'bun'), 5));
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        setIngredients({ ...ingredients, error: message, isLoading: false });
      }
    })();
  }, []); // eslint-disable-line

  return (
    <ErrorBoundary>
      <div className={appStyles.appHeader}>
        <AppHeader />
      </div>
      <div className={`${appStyles.appBody} flex`}>
        {ingredients.error ? (
          <p>"Что-то пошло не так: " + ingredients.error</p>
        ) : ingredients.isLoading ? (
          <p>"Загрузка..."</p>
        ) : ingredients.data && ingredients.data.length ? (
        <>
          <span className={appStyles.column}>
            <BurgerIngredients
              ingredients={ingredients.data}
              pickedBun={pickedBun}
              setPickedBun={setPickedBun}
              pickedIngredients={pickedIngredients}
              setPickedIngredients={setPickedIngredients}
            />
          </span>
          <span className={appStyles.column}>
            <BurgerConstructor
              pickedBun={pickedBun}
              pickedIngredients={pickedIngredients}
            />
          </span>
        </>
        ) : (
          <p>Нет данных об ингридиентах</p>
        )}
      </div>
      <div id={REACT_MODALS_ID}></div>
      </ErrorBoundary>
  );
}

export default App;
