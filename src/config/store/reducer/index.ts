import { ActionTypes } from '../models';
import { Actions } from '../models';

export const initialState = {
    user: {
        uid: 'QwtgPwzXUDds1MXhO40i4pWiWEh2',
        projectsId: ['_b5gc2wa1s'],
    },
    activeProject: null,
    sidebarOpen: false,
};
export const reducer = (state = initialState, action: Actions | any) => {
    switch (action.type) {
        case ActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case ActionTypes.ADD_PROJECT_ID:
            return {
                ...state,
                user: { ...state.user.projectsId, projectsId: [...state.user.projectsId, action.payload] },
            };
        case ActionTypes.SET_ACTIVE_PROJECT:
            return {
                ...state,
                activeProject: action.payload,
            };
        case ActionTypes.SET_SIDEBAR:
            return {
                ...state,
                sidebarOpen: !state.sidebarOpen,
            };
        default:
            return state;
    }
};
