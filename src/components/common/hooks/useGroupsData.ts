import { useContext, useEffect, useState } from 'react';
import { db } from '../../../config/firebase/firebaseInit';
import { store } from '../../../config/store';

interface IGroup {
    id: string;
    groupName: string;
    taskOrder: string[];
}

export const useGroupsData = (id: string) => {
    const [group, setGroup] = useState<any>();
    const { activeProject } = useContext(store);
    const getData = async () => {
        try {
            db.collection('projects')
                .doc(activeProject?.id)
                .collection('groups')
                .doc(id)
                .onSnapshot((snapshot) => setGroup(snapshot.data()));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getData();
        return () => {
            const unsubscribe = () => {
                db.collection('projects').doc(activeProject?.id).collection('groups').doc(id);
            };
            unsubscribe();
        };
    }, []);
    return { group };
};
