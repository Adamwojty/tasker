import React, { useContext } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import ProjectInputs from './ProjectIntputs';
import { validationSchema } from './actions/validationSchema';
import { projectSubmit } from './actions/projectSubmit';
import { store } from '../../config/store';
import { useProjectsData } from './hooks/useProjectsData';
import ProjectsList from './ProjectsList';
import { Colors, FontSize } from '../../assets/const';

interface IInitialValues {
    projectName: string;
    desc: string;
}

const Project: React.FC = () => {
    const initialValues: IInitialValues = { projectName: '', desc: '' };
    const { user, dispatch } = useContext(store);
    const { projects } = useProjectsData();

    return (
        <Wrapper>
            <Title>Create new Project</Title>
            <Formik
                initialValues={initialValues}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={validationSchema}
                onSubmit={(values, action) => projectSubmit({ values, action, user, dispatch })}
            >
                {(props: { errors: string }) => <ProjectInputs {...props} />}
            </Formik>
            <ProjectsList projects={projects} />
        </Wrapper>
    );
};
const Wrapper = styled.main`
    margin-top: 50px;
    width: 100%;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h1`
    margin-bottom: 10px;
    text-align: center;
    font-size: ${FontSize.BIG_HEADER_MOBILE};
    color: ${Colors.SECONDARY};
`;

export default Project;
