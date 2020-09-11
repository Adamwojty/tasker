import React, { useContext } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import ProjectInputs from './ProjectIntputs';
import { validationSchema } from './actions/validationSchema';
import { projectSubmit } from './actions/projectSubmit';
import { store } from '../../config/store';
interface IInitialValues {
    projectName: string;
    desc: string;
}

const Project: React.FC = () => {
    const initialValues: IInitialValues = { projectName: '', desc: '' };
    const { user, dispatch } = useContext(store);
    return (
        <Wrapper>
            <Formik
                initialValues={initialValues}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={validationSchema}
                onSubmit={(values, action) => projectSubmit({ values, action, user, dispatch })}
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
