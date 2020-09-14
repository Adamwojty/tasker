import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Routes } from './Routes';
import MainView from '../../views/MainView';
import SignUpView from '../../views/SignUpView';
import SignInView from '../../views/SignInView';
import AppRouteLayout from './AppRouteLayout';
import DiagramingSpace from '../../components/DiagrammingSpace';
import Tasks from '../../components/Tasks';
import Project from '../../components/Project';
import Groups from '../../components/Groups';

const Routing: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={Routes.MAIN} component={MainView} />
            <AppRouteLayout path={Routes.TABLE} component={DiagramingSpace} />
            <AppRouteLayout path={Routes.TASKS} component={Tasks} />
            <AppRouteLayout path={Routes.NEW_PROJECT} component={Project} />
            <AppRouteLayout path={Routes.GROUPS} component={Groups} />
            <Route path={Routes.SIGN_IN} component={SignInView} />
            <Route path={Routes.SIGN_UP} component={SignUpView} />
        </Switch>
    </BrowserRouter>
);

export default Routing;
