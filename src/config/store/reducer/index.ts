import { ActionTypes } from '../models';
import { IAction } from '../models';

export const initialState = {
    user: null,
};
export const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case ActionTypes.SET_USER:
            return state;
        default:
            return state;
    }
};
