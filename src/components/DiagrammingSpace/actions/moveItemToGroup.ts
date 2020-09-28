import firebase from 'firebase';
import { db } from '../../../config/firebase/firebaseInit';

export const moveItemToGroup = async (
    groupId: string,
    newTaskOrder: { id: string }[],
    newGroupId?: string,
    taskID?: string,
) => {
    try {
        //add Task to new group
        db.collection('groups')
            .doc(newGroupId)
            .update({ taskOrder: firebase.firestore.FieldValue.arrayUnion({ id: taskID }) });
        //remove Task from old group
        db.collection('groups').doc(groupId).update({ taskOrder: newTaskOrder });
    } catch (err) {
        console.log(err);
    }
};
