import { useCallback, useContext, useEffect, useState } from 'react';
import update from 'immutability-helper';
import { useDrop } from 'react-dnd';
import { store } from '../../../config/store';
import { useGetGroups } from '../../Groups/hooks/useGetGroups';
import { moveItemToGroup } from '../actions/moveItemToGroup';
import { updateTasks } from '../actions/updateTasks';
import { ItemTypes } from '../ItemTypes';
import { IDraggedTask } from '../models';
import { removeTask } from '../actions/removeTask';

export const useTaskActions = (colId: number, groupId: string) => {
    const { activeProject } = useContext(store);
    const { data } = useGetGroups();
    const [tasks, setTasks] = useState<any[]>([]);

    const findTask = useCallback(
        (id: string, colId: string) => {
            const taskOrder = tasks.filter((task: { id: string }) => `${task.id}` === colId)[0]?.taskOrder;
            let item;
            let index;
            if (taskOrder) {
                item = taskOrder.filter((task: { id: string }) => `${task.id}` === id)[0];
                index = taskOrder.indexOf(item);
            }
            return {
                item,
                index,
                taskOrder,
            };
        },
        [tasks],
    );

    const moveTask = useCallback(
        (id: string, atIndex: number, colId: string) => {
            const { item, index, taskOrder } = findTask(id, colId);
            const newTaskOrder = update(taskOrder, {
                $splice: [
                    [index, 1],
                    [atIndex, 0, item],
                ],
            });
            updateTasks(newTaskOrder, colId, activeProject?.id);
        },
        [findTask, data],
    );

    const [, drop] = useDrop({
        accept: ItemTypes.ITEM,
        drop: ({ id: draggedId, colId: overColId, groupId: draggedGroupId, data }: IDraggedTask) => {
            if (colId !== overColId) {
                const newTaskOrder = removeTask(draggedId, draggedGroupId, findTask);
                moveItemToGroup(draggedGroupId, newTaskOrder, groupId, data, activeProject?.id);
            }
            return undefined;
        },
    });

    useEffect(() => {
        if (data) {
            setTasks(data);
        }
        return () => {
            setTasks(data);
        };
    }, [data]);

    return { findTask, moveTask, drop, removeTask };
};
