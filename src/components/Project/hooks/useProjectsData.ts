import { useState, useEffect, useContext } from 'react';
import { db } from '../../../config/firebase/firebaseInit';
import { store } from '../../../config/store';
interface IProject {
    projectName: string;
    desc: string;
    id: string;
}

export const useProjectsData = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const { user } = useContext(store);

    useEffect(() => {
        const unsubscribe = () =>
            user.projectsId.map(async (id: string) => {
                db.collection('projects')
                    .doc(id)
                    .onSnapshot((snapshot) => setProjects((prevState) => [...prevState, snapshot.data()]));
            });
        unsubscribe();
    }, [user]);

    return { projects };
};
