import { ActionTypes } from '../models';
import { Actions } from '../models';

export const initialState = {
    user: {
        uid: 'QwtgPwzXUDds1MXhO40i4pWiWEh2',
        projectsId: ['_b5gc2wa1s'],
    },
    activeProject: undefined,
    groupsOrder: [],
    sidebarOpen: false,
    admin: false,
};
export const reducer = (state = initialState, action: Actions | any) => {
    switch (action.type) {
        case ActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case ActionTypes.SET_ACTIVE_PROJECT:
            return {
                ...state,
                activeProject: action.payload,
            };
        case ActionTypes.SET_GROUPS_ORDER:
            return {
                ...state,
                groupsOrder: action.payload,
            };
        case ActionTypes.SET_ADMIN:
            return {
                ...state,
                admin: action.payload,
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
