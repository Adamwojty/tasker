import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Routes } from './Routes';
import MainView from '../../views/MainView';
import SignUpView from '../../views/SignUpView';
import SignInView from '../../views/SignInView';
import AppRouteLayout from './AppRouteLayout';
import DiagramingSpace from '../../components/DiagrammingSpace';

const Routing: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={Routes.MAIN} component={MainView} />
            <AppRouteLayout path={Routes.TABLE} component={DiagramingSpace} />
            <Route path={Routes.SIGN_IN} component={SignInView} />
            <Route path={Routes.SIGN_UP} component={SignUpView} />
        </Switch>
    </BrowserRouter>
);

export default Routing;
