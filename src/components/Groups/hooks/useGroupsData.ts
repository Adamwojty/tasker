import { useContext, useEffect, useState } from 'react';
import { db } from '../../../config/firebase/firebaseInit';
import { store } from '../../../config/store';

interface IGroup {
    groupName: string;
    id: string;
}

export const useGroupsData = () => {
    const [data, setData] = useState<IGroup[]>([]);
    const { activeProject } = useContext(store);

    const getData = async () => {
        try {
            db.collection('projects')
                .doc(activeProject?.id)
                .collection('groups')
                .onSnapshot((querySnapshot) => {
                    const groups: any[] = [];
                    querySnapshot.forEach((doc) => {
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
            getData();
        };
    }, []);
    return { data };
};
