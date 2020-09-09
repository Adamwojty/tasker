import { ReactNode } from 'react';

export enum ActionTypes {
    SET_USER = 'SET_USER',
}
export interface IAction {
    type: string;
    payload: any;
}

export interface IInitialContext {
    user: any;
    dispatch: ({ type, payload }: { type: string; payload: any }) => void;
}
export interface IStateProvider {
    children: ReactNode;
}
