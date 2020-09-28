import { useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { store } from '../../../config/store';
import { findCol } from '../actions/findCol';
import { moveCol } from '../actions/moveCol';
import { ItemTypes } from '../ItemTypes';
import { IDragCol } from '../models';

export const useDragCol = (id: string) => {
    const { groupsOrder, activeProject, dispatch } = useContext(store);
    const originalIndex = findCol(id, groupsOrder).index;

    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.COLUMN, id, originalIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (dropResult, monitor) => {
            const { id: droppedId, originalIndex } = monitor.getItem();
            const didDrop = monitor.didDrop();
            if (!didDrop) {
                moveCol(droppedId, originalIndex, groupsOrder, dispatch, activeProject?.id, !didDrop);
            }
        },
    });

    const [, drop] = useDrop({
        accept: ItemTypes.COLUMN,
        canDrop: () => false,
        hover({ id: draggedId }: IDragCol) {
            if (draggedId !== id) {
                const { index: overIndex } = findCol(id, groupsOrder);
                moveCol(draggedId, overIndex, groupsOrder, dispatch, activeProject?.id);
            }
        },
    });
    return { drop, drag, isDragging, originalIndex };
};
