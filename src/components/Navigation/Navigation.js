import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { MainNav } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <nav>
      <MainNav to="/">Home</MainNav>
      {isLoggedIn && <MainNav to="/contacts">Contacts</MainNav>}
    </nav>
  );
};
