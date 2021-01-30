import React, {memo} from 'react';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ROUTES} from '../../consts';
import MainPage from '../main-page';
import AuthPage from '../auth-page';
import TopMenu from '../top-menu';

const App = () => {
    return (
        <Router>
            <TopMenu />
            <Switch>
                <Route path={`/${ROUTES.MAIN}`} exact>
                    <MainPage />
                </Route>
                <Route path={`/${ROUTES.AUTH}`} exact>
                    <AuthPage />
                </Route>
            </Switch>
        </Router>
    );
};

export default memo(App);