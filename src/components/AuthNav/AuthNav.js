import React from 'react';
import { AuthLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <AuthLink to="/register"> Sign up </AuthLink>
      <AuthLink to="/login"> Log in </AuthLink>
    </div>
  );
};
