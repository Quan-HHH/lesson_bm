// console.log('sstartttttttt')
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages/login';
import './i18n';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={LoginPage} />
        </Switch>
    </HashRouter>,
    document.getElementById('root')
)