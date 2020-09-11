import { setUser } from '../../../config/store/actions';
import { auth } from '../../../config/firebase/firebaseInit';
import { Routes } from '../../../config/Routing/Routes';

interface IValues {
    email: string;
    password: string;
}
interface ISignIn {
    values: IValues;
    action: {
        setErrors: (fields: { [field: string]: string }) => void;
    };
    dispatch: ({ type, payload }: { type: string; payload: any }) => void;
}

export const signInSubmit = async ({ values, action, dispatch }: ISignIn) => {
    const { email, password } = values;
    try {
        const response = await auth.signInWithEmailAndPassword(email, password);
        const uid = response.user?.uid;
        dispatch(setUser(uid));
        window.location.replace(Routes.TABLE);
    } catch (err) {
        const errorMessage = err.message;
        console.log(errorMessage);
        action.setErrors({ email: 'account not found' });
    }
};
