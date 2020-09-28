import { useContext, useEffect, useState } from 'react';
import { db } from '../../../config/firebase/firebaseInit';
import { store } from '../../../config/store';

interface IGroups {
    groupName: string;
    id: string;
    taskOrder: { id: string }[];
}

export const useGetGroups = () => {
    const [groups, setGroups] = useState<IGroups[]>();
    const { groupsOrder } = useContext(store);
    useEffect(() => {
        const unsubscribe = () => {
            const allGroups: any[] = [];
            groupsOrder.map((g: { id: string }) => {
                db.collection('groups')
                    .doc(g.id)
                    .onSnapshot((snapshot) => allGroups.push(snapshot.data()));
            });
            setGroups(allGroups);
        };
        unsubscribe();
        return () => {
            unsubscribe();
        };
    }, []);
    return { groups };
};
