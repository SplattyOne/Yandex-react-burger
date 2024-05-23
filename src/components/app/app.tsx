import React from 'react';

import appStyles from './app.module.css';
// import ingredients from '../../utils/data';
import ErrorBoundary from '../../utils/error-boundary';

import AppHeader from '../header/header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

const getRandomElement = (arr: Array<any>) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const getRandomElements = (arr: Array<any>, count: number) => {
  if (!arr || !arr.length)
    return [];
  return Array.apply(null, Array(count)).map(() => getRandomElement(arr));
}

interface IngredientsProps {
  isLoading: boolean,
  hasError: boolean,
  data: Array<any>
}

function App() {
  const [ingredients, setIngredients] = React.useState<IngredientsProps>({
    isLoading: false,
    hasError: false,
    data: []
  });
  const [pickedBun, setPickedBun] = React.useState<any>(null);
  const [pickedIngredients, setPickedIngredients] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    const getIngredients = () => {
      setIngredients({ ...ingredients, hasError: false, isLoading: true });
      fetch('https://norma.nomoreparties.space/api/ingredients ')
        .then(res => res.json())
        .then(data => {
          setIngredients({ ...ingredients, data: data.data, isLoading: false });
          setPickedBun(data.data.filter(x => x.type === 'bun')[0]);
          setPickedIngredients(getRandomElements(data.data.filter(x => x.type !== 'bun'), 5));
        })
        .catch(e => {
          console.log(e);
          setIngredients({ ...ingredients, hasError: true, isLoading: false });
        });
    };
    getIngredients();
  }, []); // eslint-disable-line

  return (
    <ErrorBoundary>
      <div className={appStyles.appHeader}>
        <AppHeader />
      </div>
      <div className={`${appStyles.appBody} flex`} style={{justifyContent: 'flex-between', gap: '40px'}}>
        {ingredients.isLoading && "Загрузка..."}
        {ingredients.hasError && "Произошла ошибка: " + ingredients.hasError}
        {!ingredients.isLoading &&
        !ingredients.hasError &&
        <>
          <span style={{flex: '0 0 50%'}}>
            <BurgerIngredients
              ingredients={ingredients.data}
              pickedBun={pickedBun}
              setPickedBun={setPickedBun}
              pickedIngredients={pickedIngredients}
              setPickedIngredients={setPickedIngredients}
            />
          </span>
          <span style={{flex: '0 0 50%'}}>
            <BurgerConstructor
              pickedBun={pickedBun}
              pickedIngredients={pickedIngredients}
            />
          </span>
        </>}
      </div>
      </ErrorBoundary>
  );
}

export default App;
