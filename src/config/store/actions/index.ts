import { ActionTypes } from '../models';

export const addProjectId = (id: string) => {
    return {
        type: ActionTypes.ADD_PROJECT_ID,
        payload: id,
    };
};
export const setUser = (id?: string) => {
    return {
        type: ActionTypes.SET_USER,
        payload: id,
    };
};
