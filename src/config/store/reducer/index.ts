import { ActionTypes } from '../models';
import { IAction } from '../models';

export const initialState = {
    user: '12312241289',
    projectsId: [],
};
export const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case ActionTypes.SET_USER:
            return state;
        default:
            return state;
    }
};
