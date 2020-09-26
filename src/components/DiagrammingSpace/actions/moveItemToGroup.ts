import firebase from 'firebase';
import { db } from '../../../config/firebase/firebaseInit';

export const moveItemToGroup = async (
    groupId: string,
    newTaskOrder: { id: string }[],
    newGroupId: string,
    task: { id: string; desc: string; taskName: string },
    projectId?: string,
) => {
    try {
        //add Task to new group
        db.collection('projects')
            .doc(projectId)
            .collection('groups')
            .doc(newGroupId)
            .update({ taskOrder: firebase.firestore.FieldValue.arrayUnion({ id: task.id }) });
        //remove Task from old group
        db.collection('projects').doc(projectId).collection('groups').doc(groupId).update({ taskOrder: newTaskOrder });
    } catch (err) {
        console.log(err);
    }
};
