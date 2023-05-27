import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Form, FormInput } from './RegisterView.styled';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';

export const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      return toast.error('💩 Please fill in all fields!');
    } else if (password.length < 7) {
      return toast.info('Passwords must be at least 7 characters long!');
    }

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormInput
        label="Name"
        variant="outlined"
        color="secondary"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <FormInput
        label="Email"
        variant="outlined"
        color="secondary"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <FormInput
        label="Password"
        variant="outlined"
        color="secondary"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />

      <Button variant="contained" color="secondary" size="large" type="submit">
        Sing up
      </Button>
    </Form>
  );
};
