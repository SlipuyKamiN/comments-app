import styled from '@emotion/styled';
import { ImSpinner9 } from 'react-icons/im';

export const Container = styled.div`
  padding: 20px 40px;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Loader = styled(ImSpinner9)`
  display: block;
  width: 50px;
  height: 50px;
  animation: rotation 1s infinite;
  margin: 100px auto;
`;
