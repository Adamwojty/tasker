import { useContext, useEffect, useState } from 'react';
import { db } from '../../../config/firebase/firebaseInit';
import { store } from '../../../config/store';

export const useGroupsData = (id: string) => {
    const [group, setGroup] = useState<any>();
    const { activeProject } = useContext(store);

    useEffect(() => {
        const unsubscribe = () => {
            console.log('123');
            db.collection('projects')
                .doc(activeProject?.id)
                .collection('groups')
                .doc(id)
                .onSnapshot((snapshot) => setGroup(snapshot.data()));
        };
        unsubscribe();
        return () => {
            unsubscribe();
        };
    }, []);
    return { group };
};
