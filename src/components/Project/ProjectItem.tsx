import React, { useCallback, useContext } from 'react';
import { store } from '../../config/store';
import { setActiveProject, setAdmin, setGroupsOrder } from '../../config/store/actions';
import Item from './Item';

interface IProject {
    project: {
        projectName: string;
        desc: string;
        id: string;
        groupsOrder: { id: string }[];
        admin: string;
    };
}

const ProjectItem: React.FC<IProject> = ({ project }) => {
    const { projectName, desc, groupsOrder, admin, id } = project;
    const { dispatch, activeProject, user } = useContext(store);
    const handleActiveProject = useCallback(() => {
        dispatch(setGroupsOrder(groupsOrder));
        dispatch(setActiveProject(project));
        if (user.uid === admin) return dispatch(setAdmin(true));
        else dispatch(setAdmin(false));
    }, [admin]);
    const active = activeProject === project;

    return (
        <Item handleActiveProject={handleActiveProject} projectName={projectName} desc={desc} active={active} id={id} />
    );
};

export default ProjectItem;
