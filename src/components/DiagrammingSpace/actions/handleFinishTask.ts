import { IGroup } from '../models';
import { finishTask } from './finishTask';
import { removeTask } from './removeTask';

export const handleFinishTask = (id: string, groupID: string, group: IGroup, projectID?: string) => {
    const newTaskOrder = removeTask(id, group);
    finishTask(id, groupID, newTaskOrder, projectID);
};
