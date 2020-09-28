import { useContext, useState, useEffect } from 'react';
import { db } from '../../../config/firebase/firebaseInit';
import { store } from '../../../config/store';

export const useGetFinishedTasks = () => {
    const { activeProject } = useContext(store);
    const [finishedTasks, setFinishedTasks] = useState<any[]>([]);

    useEffect(() => {
        const unsubscribe = async () => {
            const project = (await db.collection('projects').doc(activeProject?.id).get()).data();
            const finishedOrder = project?.finishedTasks;
            finishedOrder.map((task: { id: string }) =>
                db
                    .collection('tasks')
                    .doc(task.id)
                    .onSnapshot((snapshot) => setFinishedTasks((prevState) => [...prevState, snapshot.data()])),
            );
        };
        unsubscribe();
    }, []);

    return { finishedTasks };
};
