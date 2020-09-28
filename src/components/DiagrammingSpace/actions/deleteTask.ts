import { db } from '../../../config/firebase/firebaseInit';

export const deleteTask = async (taskID: string, groupID: string, newTaskOrder: { id: string }[]) => {
    try {
        db.collection('tasks').doc(taskID).delete();
        db.collection('groups').doc(groupID).update({ taskOrder: newTaskOrder });
    } catch (err) {
        console.log(err);
    }
};
