import { db } from '../../../config/firebase/firebaseInit';
import { FormikState } from 'formik';

interface IValues {
    taskName: string;
    desc: string;
    groupID: string;
}
interface ITask {
    values: IValues;
    projectID?: string;
    action: {
        setErrors: (fields: { [field: string]: string }) => void;
        resetForm: (nextInitialState?: FormikState<IValues>) => void;
    };
}
export const submitTask = async ({ values, action, projectID }: ITask) => {
    try {
        const { taskName, desc, groupID } = values;
        const ID: string = '_' + Math.random().toString(36).substr(2, 9);
        await db
            .collection('projects')
            .doc(projectID)
            .collection('groups')
            .doc(groupID)
            .collection('tasks')
            .doc(ID)
            .set({
                taskName,
                desc,
                id: ID,
            });
        action.resetForm();
    } catch (err) {
        action.setErrors({ taskName: 'server error' });
    }
};
