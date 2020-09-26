import update from 'immutability-helper';
import { FindTaskType } from '../models';

export const removeTask = (id: string, colId: string, findTask: FindTaskType) => {
    const { index, taskOrder } = findTask(id, colId);
    const newTaskOrder = update(taskOrder, {
        $splice: [[index, 1]],
    });
    return newTaskOrder;
};
