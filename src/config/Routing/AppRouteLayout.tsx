import React, { ReactType } from 'react';
import { Route } from 'react-router-dom';
import AppLayout from '../../Layout/AppLayout';

interface IAppRouteLayout {
    component: ReactType;
    path: string;
}

const AppRouteLayout: React.FC<IAppRouteLayout> = ({ component: Component, ...rest }: IAppRouteLayout) => (
    <Route
        {...rest}
        render={(props) => (
            <AppLayout>
                <Component {...props} />
            </AppLayout>
        )}
    />
);
export default AppRouteLayout;
