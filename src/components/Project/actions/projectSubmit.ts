import { db } from '../../../config/firebase/firebaseInit';
import { FormikState } from 'formik';
import { addProjectId } from '../../../config/store/actions';
import firebase from 'firebase';

interface IValues {
    projectName: string;
    desc: string;
}
interface IProject {
    values: IValues;
    action: {
        setErrors: (fields: { [field: string]: string }) => void;
        resetForm: (nextInitialState?: FormikState<IValues>) => void;
    };
    user: {
        uid: string;
        projectsId: string[];
    } | null;
    dispatch: ({ type, payload }: { type: string; payload: any }) => void;
}
export const projectSubmit = async ({ values, action, user, dispatch }: IProject) => {
    try {
        const ID: string = '_' + Math.random().toString(36).substr(2, 9);
        const { projectName, desc } = values;
        await db.collection('projects').doc(ID).set({
            projectName,
            desc,
        });
        await db
            .collection('users')
            .doc(user?.uid)
            .update({
                projectsId: firebase.firestore.FieldValue.arrayUnion(ID),
            });
        dispatch(addProjectId(ID));
        action.resetForm();
    } catch (err) {
        action.setErrors({ projectName: 'server error' });
    }
};
