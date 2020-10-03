import { useContext, useEffect } from 'react';
import { db } from '../../../config/firebase/firebaseInit';
import { store } from '../../../config/store';
import { setUser } from '../../../config/store/actions';

export const useAuth = () => {
    const { dispatch } = useContext(store);

    useEffect(() => {
        const token = localStorage.getItem('uid');

        if (token) {
            db.collection('users')
                .doc(token)
                .get()
                .then((response) => {
                    dispatch(setUser(response.data()));
                });
        }
    }, []);
    return;
};
