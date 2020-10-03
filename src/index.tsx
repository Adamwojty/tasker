import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import Routing from './config/Routing/Routing';
import GlobalStyle from './config/GlobalStyle/GlobalStyle';
import { StateProvider } from './config/store';
import AuthCheck from './config/Routing/AuthCheck';

ReactDOM.render(
    <React.StrictMode>
        <DndProvider options={HTML5toTouch}>
            <StateProvider>
                <GlobalStyle />
                <AuthCheck>
                    <Routing />
                </AuthCheck>
            </StateProvider>
        </DndProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
