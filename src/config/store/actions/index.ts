import { ActionTypes } from '../models';

export const addProjectId = (id: string) => {
    return {
        type: ActionTypes.ADD_PROJECT_ID,
        payload: id,
    };
};
export const setUser = (obj?: { uid?: string; projectsId?: string[] }) => {
    return {
        type: ActionTypes.SET_USER,
        payload: obj,
    };
};
export const setActiveProject = (obj: any) => {
    return {
        type: ActionTypes.SET_ACTIVE_PROJECT,
        payload: obj,
    };
};
