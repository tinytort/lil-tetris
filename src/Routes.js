import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home';
import LilTetris from './components/LilTetris';

export default () => (
    <Switch>
        <Route path="/" render={() => <Home />} />;
        <Route path="/game" render={() => <LilTetris />} />;
        <Redirect to="/" />
    </Switch>
);
