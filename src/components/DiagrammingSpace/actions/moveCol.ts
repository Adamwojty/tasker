import update from 'immutability-helper';
import { setGroupsOrder } from '../../../config/store/actions';
import { Collections } from '../../common/enums';
import { findCol } from './findCol';
import { updateDoc } from './updateDoc';
export const moveCol = (
    id: string,
    atIndex: number,
    groupsOrder: { id: string }[],
    dispatch: ({ type, payload }: { type: string; payload: any }) => void,
    activeProjectID?: string,
    didDrop?: boolean,
) => {
    const { column, index } = findCol(id, groupsOrder);
    const newColOrder = update(groupsOrder, {
        $splice: [
            [index, 1],
            [atIndex, 0, column],
        ],
    });

    if (!didDrop) {
        dispatch(setGroupsOrder(newColOrder));
        updateDoc(newColOrder, Collections.PROJECTS, 'groupsOrder', activeProjectID);
    }
};
