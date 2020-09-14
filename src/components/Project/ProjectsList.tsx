import React from 'react';
import styled from 'styled-components';
import { Colors, FontSize } from '../../assets/const';
import ProjectItem from './ProjectItem';
interface IProject {
    projectName: string;
    desc: string;
}

interface IProjList {
    projects: IProject[];
}

const ProjectList: React.FC<IProjList> = ({ projects }) => {
    return (
        <Wrapper>
            <Title>Your projects:</Title>
            {projects.map((item: IProject) => (
                <ProjectItem project={item} key={item.projectName} />
            ))}
        </Wrapper>
    );
};
const Wrapper = styled.section`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Title = styled.h2`
    font-size: ${FontSize.HEADER_MOBILE};
    color: ${Colors.TERITIARY};
    margin-bottom: 10px;
`;
export default ProjectList;
