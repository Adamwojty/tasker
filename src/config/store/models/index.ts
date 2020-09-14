import { ReactNode } from 'react';

export enum ActionTypes {
    SET_USER = 'SET_USER',
    ADD_PROJECT_ID = 'ADD_PROJECT_ID',
    SET_ACTIVE_PROJECT = 'SET_ACTIVE_PROJECT',
}
export interface IAction {
    type: string;
    payload: any;
}

export interface IInitialContext {
    user: {
        uid: string;
        projectsId: string[];
    };
    activeProject: {
        projectName: string;
        desc: string;
        id: string;
    } | null;

    dispatch: ({ type, payload }: { type: string; payload: any }) => void;
}
export interface IStateProvider {
    children: ReactNode;
}
