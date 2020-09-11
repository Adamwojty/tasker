import { auth } from '../../../config/firebase/firebaseInit';
import { Routes } from '../../../config/Routing/Routes';

interface IValues {
    email: string;
    password: string;
}

export const signUpSubmit = async (
    values: IValues,
    action: {
        setErrors: (fields: { [field: string]: string }) => void;
    },
) => {
    const { email, password } = values;
    try {
        await auth.createUserWithEmailAndPassword(email, password);
        window.location.replace(Routes.SIGN_IN);
    } catch (err) {
        action.setErrors({ email: 'Server error' });
    }
};
