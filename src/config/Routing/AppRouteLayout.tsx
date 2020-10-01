import React, { ElementType, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Project from '../../components/Project';
import AppLayout from '../../Layout/AppLayout';
import { store } from '../store';
import { Routes } from './Routes';

interface IAppRouteLayout {
    component: ElementType;
    path: string;
}

const AppRouteLayout: React.FC<IAppRouteLayout> = ({ component: Component, ...rest }: IAppRouteLayout) => {
    const { activeProject } = useContext(store);
    const uid = localStorage.getItem('uid');
    return uid ? (
        <Route
            exact
            {...rest}
            render={(props) => <AppLayout>{activeProject ? <Component {...props} /> : <Project />}</AppLayout>}
        />
    ) : (
        <Redirect to={Routes.MAIN} />
    );
};
export default AppRouteLayout;
