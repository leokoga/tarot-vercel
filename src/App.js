import React from 'react';
import { GlobalStyle } from './Constants/GlobalStyle';
import Router from './Routes/Router';
import { MainContainer } from "./style"

function App() {
  return (
    <div>
      <GlobalStyle/>
      <MainContainer>
        <Router/>
      </MainContainer>
    </div>
  );
}

export default App;
