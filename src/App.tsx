import React from 'react';
import styled from 'styled-components';
import './App.css';
import tw from 'twin.macro';
import { HomePage } from './app/containers/HomePage/index';

const AppContainer = styled.div`
  ${tw`
  w-full
  flex
  flex-col
  `}
`

function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;
