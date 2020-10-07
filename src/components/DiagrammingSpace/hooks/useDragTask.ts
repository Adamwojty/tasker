import { useDrag, useDrop } from 'react-dnd';
import { Collections } from '../../common/enums';
import { useFetchSingleItem } from '../../common/hooks/useFetchSingleItem';
import { findTask } from '../actions/findTask';
import { moveTask } from '../actions/moveTask';
import { ItemTypes } from '../ItemTypes';
import { IDraggedTask, IGroup } from '../models';

export const useDragTask = (colID: number, id: string, groupID: string, group: IGroup) => {
    const { data } = useFetchSingleItem(id, Collections.TASKS);
    const originalIndex = findTask(id, group).index;

    const [, drag] = useDrag({
        item: { type: ItemTypes.ITEM, id, originalIndex, colID, groupID, taskID: data?.id, group },
    });

    const [, drop] = useDrop({
        accept: ItemTypes.ITEM,
        drop: ({ id: draggedID, colID: overColID }: IDraggedTask) => {
            if (draggedID !== id && colID === overColID) {
                const { index: overIndex } = findTask(id, group);
                return moveTask(draggedID, overIndex, findTask, group);
            }
            return undefined;
        },
    });
    return { drop, drag };
};
