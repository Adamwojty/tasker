import { useContext } from 'react';
import { store } from '../../../config/store';
import { deleteTask } from '../actions/deleteTask';
import { removeTask } from '../actions/removeTask';
import { FindTaskType } from '../models';

export const useTaskDelete = (id: string, groupId: string, findTask: FindTaskType) => {
    const { activeProject } = useContext(store);

    const handleTaskDelete = () => {
        const newTaskOrder = removeTask(id, groupId, findTask);
        return deleteTask(id, groupId, newTaskOrder, activeProject?.id);
    };
    return { handleTaskDelete };
};
