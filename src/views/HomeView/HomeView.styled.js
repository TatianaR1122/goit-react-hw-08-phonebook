import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px 0;
  text-align: center;
`;

export const Title = styled(motion.h1)`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 35px;
`;

export const Text = styled(motion.p)`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
  background: linear-gradient(to right, #833ab4, #f50057, #fcb045, #b345fc) 47%
    0%;
  -webkit-text-fill-color: transparent;
`;

export const Info = styled(motion.p)`
  font-size: 20px;
  color: #757575;
`;
