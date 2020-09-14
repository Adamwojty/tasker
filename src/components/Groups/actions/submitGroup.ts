import { db } from '../../../config/firebase/firebaseInit';
import { FormikState } from 'formik';
import { addProjectId } from '../../../config/store/actions';
import firebase from 'firebase';
interface IValues {
    groupName: string;
}
interface IGroup {
    values: IValues;
    action: {
        setErrors: (fields: { [field: string]: string }) => void;
        resetForm: (nextInitialState?: FormikState<IValues>) => void;
    };
    user: string;
    dispatch: ({ type, payload }: { type: string; payload: any }) => void;
}
export const projectSubmit = async ({ values, action, user, dispatch }: IGroup) => {
    try {
        // const { projectName, desc } = values;
        // await db.collection('projects').doc(ID).set({
        //     projectName,
        //     desc,
        //     tasks: [],
        // });
        // await db
        //     .collection('users')
        //     .doc(user)
        //     .update({
        //         projects: firebase.firestore.FieldValue.arrayUnion(ID),
        //     });
        // dispatch(addProjectId(ID));
        // action.resetForm();
    } catch (err) {
        action.setErrors({ projectName: 'server error' });
    }
};
