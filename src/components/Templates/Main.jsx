import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import CentralAjuda1 from 'components/Pages/CentralAjuda1';
import CentralAjuda2 from 'components/Pages/CentralAjuda2';
import Info from 'components/Organisms/Info';
import Help from 'components/Organisms/Help';

export const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/page-1" component={CentralAjuda1} />
      <Route exact path="/page-2" component={CentralAjuda2} />
      <Redirect to="/page-1" from="*" />
    </Switch>
    <Info />
    <Help />
  </BrowserRouter>
);
export default Main;
