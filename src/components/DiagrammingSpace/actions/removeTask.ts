import update from 'immutability-helper';
import { IGroup } from '../models';
import { findTask } from './findTask';

export const removeTask = (id: string, group: IGroup) => {
    const { index } = findTask(id, group);

    const newTaskOrder = update(group.taskOrder, {
        $splice: [[index, 1]],
    });
    return newTaskOrder;
};
