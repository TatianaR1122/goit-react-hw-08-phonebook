import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthLink = styled(NavLink)`
  display: inline-block;
  padding: 12px;
  font-weight: 700;
  font-size: 20px;
  color: #212121;
  &:active {
    color: #f50057;
  }
`;
