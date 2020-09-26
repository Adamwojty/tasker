import { db } from '../../../config/firebase/firebaseInit';

export const deleteTask = async (taskID: string, groupID: string, newTaskOrder: string[], projectId: string) => {
    try {
        db.collection('tasks').doc(taskID).delete();
        db.collection('projects').doc(projectId).collection('groups').doc(groupID).update({ taskOrder: newTaskOrder });
    } catch (err) {
        console.log(err);
    }
};
