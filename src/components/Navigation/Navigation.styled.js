import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainNav = styled(NavLink)`
  display: inline-block;
  padding: 20px 0;
  font-weight: 700;
  color: #212121;
  font-size: 20px;
  &:active {
    color: #f50057;
  }
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
