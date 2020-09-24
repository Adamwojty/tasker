import { useCallback, useContext, useEffect, useState } from 'react';
import { store } from '../../../config/store';
import update from 'immutability-helper';
import { updateGroups } from '../actions/updateGroups';
import { setGroupsOrder } from '../../../config/store/actions';

export const useDiagramActions = () => {
    const { groupsOrder, dispatch, activeProject } = useContext(store);
    const [columns, setColumns] = useState<{ id: string }[]>([]);
    const moveCol = useCallback(
        (id: string, atIndex: number, didDrop?: boolean) => {
            const { column, index } = findCol(id);
            const newColOrder = update(columns, {
                $splice: [
                    [index, 1],
                    [atIndex, 0, column],
                ],
            });
            setColumns(newColOrder);
            if (!didDrop) {
                dispatch(setGroupsOrder(newColOrder));
                return updateGroups(newColOrder, activeProject?.id);
            }
        },
        [columns],
    );
    const findCol = useCallback(
        (id: string) => {
            const column = columns.filter((c: { id: string }) => `${c.id}` === id)[0];
            const index = columns.indexOf(column);
            return {
                column,
                index,
            };
        },
        [columns],
    );
    useEffect(() => {
        if (groupsOrder && !columns.length) {
            setColumns(groupsOrder);
        }
    }, [groupsOrder]);
    return { findCol, moveCol, groupsOrder };
};
