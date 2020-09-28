import firebase from 'firebase';
import { db } from '../../../config/firebase/firebaseInit';

export const finishTask = async (
    taskID: string,
    groupID: string,
    newTaskOrder: { id: string }[],
    projectID?: string,
) => {
    try {
        db.collection('groups').doc(groupID).update({
            taskOrder: newTaskOrder,
        });
        db.collection('projects')
            .doc(projectID)
            .update({ finishedTasks: firebase.firestore.FieldValue.arrayUnion({ id: taskID }) });
    } catch (err) {
        console.log(err);
    }
};
