import { db } from '../../../config/firebase/firebaseInit';

export const updateTasks = async (tasks: string[], groupID: string, projectID?: string) => {
    try {
        await db.collection('projects').doc(projectID).collection('groups').doc(groupID).update({ taskOrder: tasks });
    } catch (err) {
        console.error(err);
    }
};
