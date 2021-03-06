import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Routes } from './Routes';
import MainView from '../../views/MainView';
import SignUpView from '../../views/SignUpView';
import SignInView from '../../views/SignInView';
import AppRouteLayout from './AppRouteLayout';
import DiagramingSpace from '../../components/DiagrammingSpace';
import Project from '../../components/Project';
import Groups from '../../components/Groups';
import FinishedTasksView from '../../views/FinishedTasksView';
import ProjectJoin from '../../components/JoinProject';
import AppRouteLayoutNoProject from './AppRouteLayoutNoProject';

const Routing: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={Routes.MAIN} component={MainView} />
            <Route path={Routes.SIGN_IN} component={SignInView} />
            <Route path={Routes.SIGN_UP} component={SignUpView} />

            <AppRouteLayoutNoProject path={Routes.JOIN_PROJECT} component={ProjectJoin} />
            <AppRouteLayout path={Routes.TABLE} component={DiagramingSpace} />
            <AppRouteLayout path={Routes.NEW_PROJECT} component={Project} />
            <AppRouteLayout path={Routes.TASKS_FINISHED} component={FinishedTasksView} />
            <AppRouteLayout path={Routes.GROUPS} component={Groups} />
        </Switch>
    </BrowserRouter>
);

export default Routing;
