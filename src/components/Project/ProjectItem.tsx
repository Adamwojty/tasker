import React, { useCallback, useContext } from 'react';
import { store } from '../../config/store';
import { setActiveProject, setGroupsOrder } from '../../config/store/actions';
import Item from './Item';

interface IProject {
    project: {
        projectName: string;
        desc: string;
        id: string;
        groupsOrder: { id: string }[];
    };
}

const ProjectItem: React.FC<IProject> = ({ project }) => {
    const { projectName, desc, groupsOrder } = project;
    const { dispatch, activeProject } = useContext(store);
    const handleActiveProject = useCallback(() => {
        dispatch(setGroupsOrder(groupsOrder));
        return dispatch(setActiveProject(project));
    }, []);
    const active = activeProject === project;

    return <Item handleActiveProject={handleActiveProject} projectName={projectName} desc={desc} active={active} />;
};

export default ProjectItem;
