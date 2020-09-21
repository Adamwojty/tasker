import { ReactNode } from 'react';

export enum ActionTypes {
    SET_USER = 'SET_USER',
    ADD_PROJECT_ID = 'ADD_PROJECT_ID',
    SET_ACTIVE_PROJECT = 'SET_ACTIVE_PROJECT',
    SET_SIDEBAR = 'SET_SIDEBAR',
}

//Action's interfaces

interface IUser {
    uid: string;
    projectsId: string[];
    id: string;
}
interface IProjectId {
    id: string;
}
interface IProject {
    projectName: string;
    desc: string;
}
interface ITask {
    taskName: string;
    desc: string;
    id: string;
}

// Context
export interface IInitialContext {
    user: {
        uid: string;
        projectsId: string[];
    };

    activeProject: {
        projectName: string;
        desc: string;
        id: string;
        groupsOrder: { id: string; groupName: string; taskOrder: ITask[] }[];
    } | null;

    sidebarOpen: boolean;

    dispatch: ({ type, payload }: { type: string; payload: any }) => void;
}
export interface IStateProvider {
    children: ReactNode;
}

export type Actions =
    | { type: ActionTypes.SET_USER; payload: IUser }
    | { type: ActionTypes.ADD_PROJECT_ID; payload: IProjectId }
    | { type: ActionTypes.SET_SIDEBAR; payload: any }
    | { type: ActionTypes.SET_ACTIVE_PROJECT; payload: IProject };
