import { IGroup } from '../models';
import { deleteTask } from './deleteTask';
import { removeTask } from './removeTask';

export const handleTaskDelete = (id: string, groupID: string, group: IGroup) => {
    const newTaskOrder = removeTask(id, group);
    deleteTask(id, groupID, newTaskOrder);
};
