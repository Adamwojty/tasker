import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';
import { IDragCol } from '../models';

export const useDragCol = (
    findCol: (
        id: string,
    ) => {
        column: { id: string };
        index: number;
    },
    moveCol: (id: string, to: number, didDrop?: boolean) => void,
    id: string,
) => {
    const originalIndex = findCol(id).index;

    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.COLUMN, id, originalIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (dropResult, monitor) => {
            const { id: droppedId, originalIndex } = monitor.getItem();
            const didDrop = monitor.didDrop();
            if (!didDrop) {
                moveCol(droppedId, originalIndex, !didDrop);
            }
        },
    });

    const [, drop] = useDrop({
        accept: ItemTypes.COLUMN,
        canDrop: () => false,
        hover({ id: draggedId }: IDragCol) {
            if (draggedId !== id) {
                const { index: overIndex } = findCol(id);
                moveCol(draggedId, overIndex);
            }
        },
    });
    return { drop, drag, isDragging, originalIndex };
};