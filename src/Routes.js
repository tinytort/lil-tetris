import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Auth from './auth/Auth';
import LilTetris from './components/LilTetris';

export default () => (
    <Switch>
        <Route exact path="/" render={() => <Home />} />;
        <Route path="/auth" render={() => <Auth />} />;
        <Route path="/game" render={() => <LilTetris />} />;
        <Redirect to="/" />
    </Switch>
);
