import { useContext, useEffect, useState } from 'react';
import { db } from '../../../config/firebase/firebaseInit';
import { store } from '../../../config/store';

export const useGetGroups = () => {
    const [data, setData] = useState<any>();
    const { activeProject } = useContext(store);

    const getData = async () => {
        try {
            db.collection('projects')
                .doc(activeProject?.id)
                .collection('groups')
                .onSnapshot((snapshot) => {
                    const groups: any[] = [];
                    snapshot.forEach((doc) => {
                        groups.push(doc.data());
                    });
                    setData(groups);
                });
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getData();
        return () => {
            const unsubscribe = db
                .collection('projects')
                .doc(activeProject?.id)
                .collection('groups')
                .onSnapshot((snapshot) => {
                    const groups: any[] = [];
                    snapshot.forEach((doc) => {
                        groups.push(doc.data());
                    });
                });
            unsubscribe();
        };
    }, []);
    return { data };
};
