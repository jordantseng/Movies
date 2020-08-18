import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Components/Header/Header';
import Routes from './Components/Routes/Routes';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
};

export default App;
