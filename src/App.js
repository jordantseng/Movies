import React from 'react';
import { Router } from 'react-router-dom';
import history from './history';

import Header from './Components/Header/Header';
import Routes from './Components/Routes/Routes';

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Routes />
    </Router>
  );
};

export default App;
