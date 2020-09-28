import { db } from '../../../config/firebase/firebaseInit';

export const updateTasks = async (tasks: { id: string }[], groupID: string) => {
    try {
        await db.collection('groups').doc(groupID).update({ taskOrder: tasks });
    } catch (err) {
        console.error(err);
    }
};
