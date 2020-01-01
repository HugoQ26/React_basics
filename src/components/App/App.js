import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import MainLayout from '../MainLayout/MainLayout';
import Faq from '../Faq/Faq';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/faq" component={Faq} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
