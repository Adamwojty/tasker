import { db } from '../../../config/firebase/firebaseInit';
import { FormikState } from 'formik';
interface IValues {
    projectName: string;
    desc: string;
}
export const projectSubmit = async (
    values: IValues,
    action: {
        setErrors: (fields: { [field: string]: string }) => void;
        resetForm: (nextInitialState?: FormikState<IValues>) => void;
    },
) => {
    try {
        const { projectName, desc } = values;
        await db.collection('projects').doc(projectName).set({
            projectName,
            desc,
        });
        action.resetForm();
    } catch (err) {
        console.log(err);
        action.setErrors({ projectName: 'server error' });
    }
};
