import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { authOperations } from 'redux/auth';
import { Form, FormInput } from './LoginView.styled';
import Button from '@mui/material/Button';

export const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('test147@ukr.net');
  const [password, setPassword] = useState('test147@ukr.net');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      return toast.error('💩 Please fill in all fields!');
    }
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormInput name="email" onChange={handleChange}></FormInput>
      <FormInput
        name="password"
        type="password"
        onChange={handleChange}
      ></FormInput>
      <Button variant="contained" color="secondary" size="large" type="submit">
        Log in
      </Button>
    </Form>
  );
};
