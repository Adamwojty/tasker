import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';
import { IDraggedTask } from '../models';

export const useDragTask = (
    findTask: (
        id: string,
        colId: string,
    ) => {
        item: string;
        index: number;
    },
    moveTask: (id: string, to: number, colId: string) => void,
    colId: number,
    id: string,
    groupId: string,
    data: { id: string; desc: string; taskName: string },
) => {
    const originalIndex = findTask(id, groupId).index;

    const [, drag] = useDrag({ item: { type: ItemTypes.ITEM, id, originalIndex, colId, groupId, data } });

    const [, drop] = useDrop({
        accept: ItemTypes.ITEM,
        drop: ({ id: draggedId, colId: overColId }: IDraggedTask) => {
            if (draggedId !== id && colId === overColId) {
                const { index: overIndex } = findTask(id, groupId);
                return moveTask(draggedId, overIndex, groupId);
            }
            return undefined;
        },
    });
    return { drop, drag };
};
