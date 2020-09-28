import { useDrop } from 'react-dnd';
import { moveItemToGroup } from '../actions/moveItemToGroup';
import { ItemTypes } from '../ItemTypes';
import { IDraggedTask } from '../models';
import { removeTask } from '../actions/removeTask';

export const useTaskDrop = (colId?: number, groupID?: string) => {
    const [, drop] = useDrop({
        accept: ItemTypes.ITEM,
        drop: ({
            id: draggedId,
            colID: overColId,
            groupID: draggedGroupId,
            taskID,
            group: draggedGroup,
        }: IDraggedTask) => {
            if (colId !== overColId) {
                const newTaskOrder = removeTask(draggedId, draggedGroup);
                moveItemToGroup(draggedGroupId, newTaskOrder, groupID, taskID);
            }
            return undefined;
        },
    });

    return { drop };
};
