/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch } from 'react-router-dom';
import store from '../store/store';
import Header from '../components/Header/Header';
import routes from '../routes';
import { Main } from '../styles';


class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Header />
          <Main>
            <Switch>
              {routes}
            </Switch>
          </Main>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
