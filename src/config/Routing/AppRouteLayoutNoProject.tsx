import React, { ElementType } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AppLayout from '../../Layout/AppLayout';
import { Routes } from './Routes';

interface IAppRouteLayout {
    component: ElementType;
    path: string;
}

const AppRouteLayoutNoProject: React.FC<IAppRouteLayout> = ({ component: Component, ...rest }: IAppRouteLayout) => {
    const uid = localStorage.getItem('uid');
    return uid ? (
        <Route
            exact
            {...rest}
            render={(props) => (
                <AppLayout>
                    <Component {...props} />{' '}
                </AppLayout>
            )}
        />
    ) : (
        <Redirect to={Routes.MAIN} />
    );
};
export default AppRouteLayoutNoProject;
