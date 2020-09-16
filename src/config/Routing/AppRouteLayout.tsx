import React, { ElementType, useContext } from 'react';
import { Route } from 'react-router-dom';
import Project from '../../components/Project';
import AppLayout from '../../Layout/AppLayout';
import { store } from '../store';

interface IAppRouteLayout {
    component: ElementType;
    path: string;
}

const AppRouteLayout: React.FC<IAppRouteLayout> = ({ component: Component, ...rest }: IAppRouteLayout) => {
    const { activeProject } = useContext(store);
    return (
        <Route
            {...rest}
            render={(props) => <AppLayout>{activeProject ? <Component {...props} /> : <Project />}</AppLayout>}
        />
    );
};
export default AppRouteLayout;
