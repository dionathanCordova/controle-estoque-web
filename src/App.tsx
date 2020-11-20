import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';

import Routes from './routes';

import {Provider} from './contexts';

const App: React.FC = () => (
  <BrowserRouter>
   <Provider>
      <Routes />
   </Provider>
  </BrowserRouter>
);

export default App;