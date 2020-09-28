import { IGroup } from '../models';

export const findTask = (id: string, group: IGroup) => {
    const item = group.taskOrder.filter((task: { id: string }) => `${task.id}` === id)[0];
    const index = group.taskOrder.indexOf(item);

    return {
        item,
        index,
    };
};
