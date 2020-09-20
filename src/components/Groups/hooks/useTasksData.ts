import { useCallback, useContext, useEffect, useState } from 'react';
import { db } from '../../../config/firebase/firebaseInit';
import { store } from '../../../config/store';

interface ITask {
    taskName: string;
    id: string;
    desc: string;
}

export const useTasksData = (id: string) => {
    const [data, setData] = useState<ITask[]>();
    const { activeProject } = useContext(store);

    const getData = useCallback(async () => {
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
    }, []);

    useEffect(() => {
        getData();
        return () => {
            const unsubscribe = () => {
                db.collection('projects').doc(activeProject?.id).collection('groups').doc(id).collection('tasks');
            };

            unsubscribe();
        };
    }, []);
    return { data };
};
