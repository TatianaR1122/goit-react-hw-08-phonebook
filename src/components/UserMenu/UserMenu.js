import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { Avatar, Container, Name } from './UserMenu.styled';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const distpatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName);

  return (
    <Container>
      <Avatar
        src="https://www.seekpng.com/png/detail/527-5275313_app-icon-detective-conan-avatar.png"
        alt="App Icon - Detective Conan Avatar@seekpng.com"
        width="32"
      />
      <Name>Welcome, {name}</Name>
      <Button
        color="secondary"
        variant="outlined"
        type="button"
        onClick={() => distpatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </Container>
  );
};
