import { useEffect, useState } from 'react';
import { db } from '../../../config/firebase/firebaseInit';

export const useTasksData = (taskID: string) => {
    const [data, setData] = useState<any>();

    useEffect(() => {
        const unsubscribe = () => {
            db.collection('tasks')
                .doc(taskID)
                .onSnapshot((snapshot) => {
                    setData(snapshot.data());
                });
        };
        unsubscribe();
    }, []);
    return { data };
};
