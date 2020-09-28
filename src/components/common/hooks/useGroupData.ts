import { useEffect, useState } from 'react';
import { db } from '../../../config/firebase/firebaseInit';

export const useGroupData = (id: string) => {
    const [group, setGroup] = useState<any>();

    useEffect(() => {
        const unsubscribe = async () => {
            db.collection('groups')
                .doc(id)
                .onSnapshot((snapshot) => setGroup(snapshot.data()));
        };
        unsubscribe();
    }, []);
    return { group };
};
