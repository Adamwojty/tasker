import { auth, db } from '../../../config/firebase/firebaseInit';
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
        const response = await auth.createUserWithEmailAndPassword(email, password);
        const uid = response.user?.uid;
        await db.collection('users').doc(uid).set({
            uid,
            projectsId: [],
        });
        window.location.replace(Routes.SIGN_IN);
    } catch (err) {
        action.setErrors({ email: 'Server error' });
    }
};
