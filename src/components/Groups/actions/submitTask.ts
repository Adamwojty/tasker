import { db } from '../../../config/firebase/firebaseInit';
import { FormikState } from 'formik';
import { randomID } from '../../common/actions/randomID';
import firebase from 'firebase';

interface IValues {
    taskName: string;
    desc: string;
    groupID: string;
}
interface ITask {
    values: IValues;
    action: {
        setErrors: (fields: { [field: string]: string }) => void;
        resetForm: (nextInitialState?: FormikState<IValues>) => void;
    };
}
export const submitTask = async ({ values, action }: ITask) => {
    try {
        const { taskName, desc, groupID } = values;
        const ID: string = randomID();
        await db
            .collection('groups')
            .doc(groupID)
            .update({ taskOrder: firebase.firestore.FieldValue.arrayUnion({ id: ID }) });
        await db.collection('tasks').doc(ID).set({ taskName, desc, id: ID });
        action.resetForm();
    } catch (err) {
        action.setErrors({ taskName: 'server error' });
    }
};
