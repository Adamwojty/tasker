import React, { useContext } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { Colors, FontSize } from '../../assets/const';
import ProjectJoinInputs from './ProjectJoinInputs';
import { joinProject } from './actions/joinProject';
import { store } from '../../config/store';
interface IInitialValues {
    projectID: string;
}

const ProjectJoin: React.FC = () => {
    const initialValues: IInitialValues = { projectID: '' };
    const { user } = useContext(store);
    return (
        <Wrapper>
            <Title>Join existing project</Title>
            <Formik
                initialValues={initialValues}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(values, action) => joinProject(values, action, user?.uid)}
            >
                {(props: { errors: IInitialValues; values: IInitialValues }) => <ProjectJoinInputs {...props} />}
            </Formik>
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
export default ProjectJoin;
