import React from 'react';
import { Container} from '@material-ui/core';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar.js';
import { Home } from './components/Home/Home.js';
import {Auth} from './components/Auth/Auth.js';


function App() {
  
  
  return (
    <BrowserRouter>
      <Container maxwidth = "lg">
        <NavBar /> 
        <Routes> 
          <Route path='/' exact element={<Home/>} />
          <Route path = "/auth" exact element= {<Auth />} />
        </Routes> 
      </Container>
    </BrowserRouter>
  );
}

export default App;
