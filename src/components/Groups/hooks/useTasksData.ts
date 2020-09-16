import { useContext, useEffect, useState } from 'react';
import { db } from '../../../config/firebase/firebaseInit';
import { store } from '../../../config/store';

export const useTasksData = (id: string) => {
    const [data, setData] = useState<any[]>();
    const { activeProject } = useContext(store);
    const getData = async () => {
        try {
            db.collection('projects')
                .doc(activeProject?.id)
                .collection('groups')
                .doc(id)
                .collection('tasks')
                .onSnapshot((querySnapshot) => {
                    const tasks: any[] = [];
                    querySnapshot.forEach((doc) => {
                        tasks.push(doc.data());
                    });

                    setData(tasks);
                });
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    return { data };
};
