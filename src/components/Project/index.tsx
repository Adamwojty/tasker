import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import ProjectInputs from './ProjectIntputs';
import { validationSchema } from './actions/validationSchema';
import { projectSubmit } from './actions/projectSubmit';

interface IInitialValues {
    projectName: string;
    desc: string;
}

const Project: React.FC = () => {
    const initialValues: IInitialValues = { projectName: '', desc: '' };
    return (
        <Wrapper>
            <Formik
                initialValues={initialValues}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={validationSchema}
                onSubmit={projectSubmit}
            >
                {(props: { errors: string }) => <ProjectInputs {...props} />}
            </Formik>
        </Wrapper>
    );
};
const Wrapper = styled.main`
    margin-top: 50px;
    width: 100%;
    padding-left: 20px;
`;
export default Project;
