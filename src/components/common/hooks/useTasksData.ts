import { useCallback, useContext, useEffect, useState } from 'react';
import { db } from '../../../config/firebase/firebaseInit';
import { store } from '../../../config/store';

interface ITask {
    taskName: string;
    id: string;
    desc: string;
}

export const useTasksData = (taskID: string, groupID: string) => {
    const [data, setData] = useState<any>();
    const { activeProject } = useContext(store);

    const getData = useCallback(async () => {
        try {
            db.collection('projects')
                .doc(activeProject?.id)
                .collection('groups')
                .doc(groupID)
                .collection('tasks')
                .doc(taskID)
                .onSnapshot((snapshot) => {
                    setData(snapshot.data());
                });
        } catch (err) {
            console.error(err);
        }
    }, []);

    useEffect(() => {
        getData();

        return () => {
            const unsubscribe = () => {
                db.collection('projects')
                    .doc(activeProject?.id)
                    .collection('groups')
                    .doc(groupID)
                    .collection('tasks')
                    .doc(taskID);
            };

            unsubscribe();
        };
    }, []);
    return { data };
};
