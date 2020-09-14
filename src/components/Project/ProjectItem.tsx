import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import { Colors, FontSize } from '../../assets/const';
import { store } from '../../config/store';
import { setActiveProject } from '../../config/store/actions';

interface IProject {
    project: { projectName: string; desc: string };
}

const ProjectItem: React.FC<IProject> = ({ project }) => {
    const { projectName, desc } = project;
    const { dispatch } = useContext(store);
    const handleActiveProject = useCallback(() => {
        return dispatch(setActiveProject(project));
    }, []);

    return (
        <Wrapper onClick={handleActiveProject}>
            <Title>{projectName}</Title>
            <Desc>{desc}</Desc>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    cursor: pointer;
    display: block;
    width: 80%;
    min-height: 100px;
    padding: 10px;
    border-radius: 5px;
    background-color: ${Colors.QUINARY};
    color: ${Colors.TERITIARY};
    transition: 0.2s ease-in-out;
    :hover {
        background-color: ${Colors.SECONDARY};
        color: ${Colors.MAIN};
    }
`;
const Title = styled.h3`
    font-size: ${FontSize.MID_HEADER_MOBILE};
    margin-bottom: 5px;
`;
const Desc = styled.p`
    font-size: ${FontSize.TEXT_MOBILE};
`;
export default ProjectItem;
