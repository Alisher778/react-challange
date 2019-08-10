import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Companies from './Companies/Companies';
import ShowCompany from './Companies/ShowCompany/ShowCompany';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import Search from './Search/Search';


class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={LandingPage} />
                        <Route path="/companies" exact component={Companies} />
                        <Route path="/companies/:ticker" exact component={ShowCompany} />
                        <Route path="/search" exact component={Search} />
                    </Switch>
                </div>
            </HashRouter>

        )
    }
}

export default App;