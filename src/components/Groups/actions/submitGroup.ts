import { db } from '../../../config/firebase/firebaseInit';
import { FormikState } from 'formik';
import firebase from 'firebase';

interface IValues {
    groupName: string;
}
interface IGroup {
    values: IValues;
    projectID?: string;
    action: {
        setErrors: (fields: { [field: string]: string }) => void;
        resetForm: (nextInitialState?: FormikState<IValues>) => void;
    };
}
export const submitGroup = async ({ values, action, projectID }: IGroup) => {
    try {
        const { groupName } = values;
        const ID: string = '_' + Math.random().toString(36).substr(2, 9);
        await db.collection('projects').doc(projectID).collection('groups').doc(ID).set({ groupName, id: ID });
        await db
            .collection('projects')
            .doc(projectID)
            .update({ groupsOrder: firebase.firestore.FieldValue.arrayUnion({ groupName, id: ID }) });
        action.resetForm();
    } catch (err) {
        action.setErrors({ groupName: 'server error' });
    }
};
