import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalSyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <GlobalSyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
