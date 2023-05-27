import { TextField } from '@mui/material';
import styled from 'styled-components';

export const Form = styled.form`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 40px 0;
  text-align: center;
`;
export const FormInput = styled(TextField)`
  margin-bottom: 20px !important;
  width: 100%;
  background-color: #fff !important;
`;
