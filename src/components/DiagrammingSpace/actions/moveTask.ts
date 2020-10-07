import update from 'immutability-helper';
import { Collections } from '../../common/enums';
import { FindTaskType } from '../models';
import { updateDoc } from './updateDoc';

export const moveTask = (
    id: string,
    atIndex: number,
    findTask: FindTaskType,
    group: { id: string; groupName: string; taskOrder: { id: string }[] },
) => {
    const { item, index } = findTask(id, group);
    const newTaskOrder = update(group.taskOrder, {
        $splice: [
            [index, 1],
            [atIndex, 0, item],
        ],
    });

    updateDoc(newTaskOrder, Collections.GROUPS, 'taskOrder', group.id);
};
