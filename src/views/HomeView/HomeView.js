import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { authSelectors } from 'redux/auth';
import { Info, Text, Title, Wrapper } from './HomeView.styled';
import { useSelector } from 'react-redux';
import { variants } from 'utils/motionVar';

export const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <Wrapper>
      <AnimatePresence>
        <Title
          initial="initial"
          animate="animate"
          exit="exit"
          transition="transition"
          variants={variants}
        >
          Welcome 👋
        </Title>
      </AnimatePresence>
      <AnimatePresence>
        <Text
          initial="initial"
          animate="animate"
          exit="exit"
          transition="transition"
          variants={variants}
        >
          Now you will exactly not forget your contacts!
        </Text>
      </AnimatePresence>
      {!isLoggedIn && (
        <AnimatePresence>
          <Info
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={variants}
          >
            Please, <b>Sign up</b> or <b>Log in</b> to have access to the
            Phonebook!
          </Info>
        </AnimatePresence>
      )}
    </Wrapper>
  );
};
