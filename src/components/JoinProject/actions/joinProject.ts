import firebase from 'firebase';
import { db } from '../../../config/firebase/firebaseInit';

interface IValues {
    projectID: string;
}

export const joinProject = async (
    values: IValues,
    action: {
        setErrors: (fields: { [field: string]: string }) => void;
    },
    uID?: string,
) => {
    let exists = false;
    try {
        await db
            .collection('projects')
            .doc(values.projectID)
            .get()
            .then(function (doc) {
                if (doc.exists) return (exists = true);
                else action.setErrors({ projectID: 'wrong ID' });
            });
        if (exists) {
            db.collection('users')
                .doc(uID)
                .update({ projectsId: firebase.firestore.FieldValue.arrayUnion(values.projectID) });
        }
    } catch (err) {
        action.setErrors({ projectID: 'wrong ID' });
    }
};
