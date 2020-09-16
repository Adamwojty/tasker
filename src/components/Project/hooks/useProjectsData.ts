import { useState, useEffect, useContext } from 'react';
import { db } from '../../../config/firebase/firebaseInit';
import { store } from '../../../config/store';
interface IProject {
    projectName: string;
    desc: string;
    tasks: [];
}

export const useProjectsData = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const { user } = useContext(store);
    const getProjects = () => {
        user.projectsId.map(async (id: string) => {
            db.collection('projects')
                .doc(id)
                .onSnapshot((snapshot) => setProjects((prevState) => [...prevState, snapshot.data()]));
        });
    };

    useEffect(() => {
        getProjects();
        return () => {
            getProjects();
        };
    }, [user]);

    return { projects };
};
