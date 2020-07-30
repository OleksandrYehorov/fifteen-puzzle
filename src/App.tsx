import React from 'react';
import styled from 'styled-components/macro';
import { FifteenPuzzleGame } from './components/FifteenPuzzleGame';

const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(34, 36, 41);
  color: rgb(224, 228, 228);
`;

export const App = () => {
  return (
    <Main>
      <FifteenPuzzleGame />
    </Main>
  );
};
