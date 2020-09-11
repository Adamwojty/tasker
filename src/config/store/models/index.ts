import { ReactNode } from 'react';

export enum ActionTypes {
    SET_USER = 'SET_USER',
    ADD_PROJECT_ID = 'ADD_PROJECT_ID',
}
export interface IAction {
    type: string;
    payload: any;
}

export interface IInitialContext {
    user: string;
    projectsId: string[];
    dispatch: ({ type, payload }: { type: string; payload: any }) => void;
}
export interface IStateProvider {
    children: ReactNode;
}
