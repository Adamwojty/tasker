import { useState, useEffect, useContext } from 'react';
import { db } from '../../../config/firebase/firebaseInit';
import { store } from '../../../config/store';

export const useProjectsData = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const { user } = useContext(store);

    useEffect(() => {
        const unsubscribe = () =>
            user.projectsId.map(async (id: string) => {
                const project = await db.collection('projects').doc(id).get();
                setProjects((prevState) => [...prevState, project.data()]);
            });
        unsubscribe();
    }, [user]);

    return { projects };
};
