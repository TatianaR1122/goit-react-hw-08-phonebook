import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { HomeView } from 'views/HomeView/HomeView';
import { RegisterView } from 'views/Register/RegisterView';
import { LoginView } from 'views/LoginView/LoginView';
import { ContactsView } from 'views/ContactsView/ContactsView';
import { Layout } from 'components/Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'components/Container/Container';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import { authOperations } from 'redux/auth';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="/" element={<PublicRoute />}>
            <Route path="/register" element={<RegisterView />} />

            <Route path="/login" element={<LoginView />} />
          </Route>

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsView />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={5000} position="top-center" />
    </Container>
  );
}
