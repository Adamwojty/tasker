import { db } from '../../../config/firebase/firebaseInit';
import { FormikState } from 'formik';

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
    // dispatch: ({ type, payload }: { type: string; payload: any }) => void;
}
export const submitGroup = async ({ values, action, projectID }: IGroup) => {
    try {
        console.log(projectID);
        const { groupName } = values;
        await db.collection('projects').doc(projectID).collection('groups').add({ groupName: groupName });
        action.resetForm();
    } catch (err) {
        action.setErrors({ groupName: 'server error' });
    }
};
