import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Checkout from '../pages/Checkout';

const Routes: React.FC = () => (
	<BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/checkout' exact component={Checkout} />
	</BrowserRouter>
)

export default Routes;