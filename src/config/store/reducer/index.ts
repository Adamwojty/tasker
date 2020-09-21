import { ActionTypes } from '../models';
import { Actions } from '../models';

export const initialState = {
    user: {
        uid: 'QwtgPwzXUDds1MXhO40i4pWiWEh2',
        projectsId: ['_b5gc2wa1s'],
    },
    activeProject: null,
    // {
    //     projectName: 'project1',
    //     desc: 'test1',
    //     id: '_b5gc2wa1s',
    //     groupsOrder: [
    //         {
    //             id: '_asqzytwh0',
    //             groupName: 'group test',
    //             taskOrder: [
    //                 { desc: 'very new task wow', id: 'IOs63XZs3KcHLr1BZSwt', taskName: 'new task' },

    //                 { desc: 'desc decs cesc', id: 'r93zRwSP1475Ma9FCmfU', taskName: 'task1' },
    //             ],
    //         },
    //         {
    //             id: '_b3uwnse89',
    //             groupName: 'Open',
    //             taskOrder: [
    //                 {
    //                     desc: 'open task 123',
    //                     id: '_4xw3dbi2g',
    //                     taskName: 'test task',
    //                 },
    //             ],
    //         },
    //     ],
    // },
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
