/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { PureComponent } from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import Header from './Header/Header';
import routes from '../routes';
import { Main } from '../styles';


class App extends PureComponent {
  render() {
    return (
      <HashRouter>
        <Header />
        <Main>
          <Switch>
            {routes}
          </Switch>
        </Main>
      </HashRouter>
    );
  }
}

export default App;
