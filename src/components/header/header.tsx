import React from 'react';
import headerStyles from './header.module.css';
import { Logo, BurgerIcon, MenuIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';


function AppHeader() {
  return (
    <>
      <nav className={`${headerStyles.nav} pt-4 pb-4`}>
        <span className={headerStyles.headerLeft}>
          <span className='flex p-5'>
            <BurgerIcon type='primary' />
            <p className='text text_type_main-default ml-2'>Конструктор</p>
          </span>
          <span className='flex p-5 ml-2'>
            <MenuIcon type='primary' />
            <p className='text text_type_main-default ml-2'>Лента заказов</p>
          </span>
        </span>
        <span className={headerStyles.headerCenter}>
          <Logo />
        </span>
        <span className={headerStyles.headerRight}>
          <span className='flex p-5'>
            <ProfileIcon type='primary' />
            <p className='text text_type_main-default ml-2'>Личный кабинет</p>
          </span>
        </span>
      </nav>
    </>
  );
}

export default AppHeader;
