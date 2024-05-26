import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { MAIN_TYPE, SAUCE_TYPE, BUN_TYPE, MAIN_TYPE_NAME, SAUCE_TYPE_NAME, BUN_TYPE_NAME } from '../../../utils/constants';
import tabStyles from './burger-tabs.module.css';


interface BurgerTabsProps {
  current: string,
  setCurrent: any
}

const BurgerTabs = (props: BurgerTabsProps) => {
  return (
    <div className={tabStyles.tabs}>
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

export default BurgerTabs;
