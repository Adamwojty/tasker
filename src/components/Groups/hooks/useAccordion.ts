import { useReducer } from 'react';

enum ActionTypes {
    TOGGLE_INDEX = 'toggle_index',
}
const accordionReducer = (openIndexes: number[], action: { type: string; index: number }) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_INDEX: {
            const closing = openIndexes.includes(action.index);
            return closing ? openIndexes.filter((i) => i !== action.index) : [...openIndexes, action.index];
        }
        default: {
            throw new Error(`Unhandled type in accordionReducer: ${action.type}`);
        }
    }
};
export const useAccordion = ({ reducer = accordionReducer } = {}) => {
    const [openIndexes, dispatch] = useReducer(reducer, [0]);
    const toggleIndex = (index: number) => dispatch({ type: ActionTypes.TOGGLE_INDEX, index });
    return { openIndexes, toggleIndex };
};
