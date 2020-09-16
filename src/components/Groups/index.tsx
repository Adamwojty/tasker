import React, { useContext } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import GroupsInputs from './GroupsInputs';
import { store } from '../../config/store';
import { submitGroup } from './actions/submitGroup';
import { validationSchema } from './actions/validationSchema';

interface IInitialValues {
    groupName: string;
}

const Groups: React.FC = () => {
    const initialValues: IInitialValues = { groupName: '' };
    const { activeProject } = useContext(store);
    return (
        <Wrapper>
            <Formik
                initialValues={initialValues}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={validationSchema}
                onSubmit={(values, action) => submitGroup({ values, action, projectID: activeProject?.id })}
            >
                {(props: { errors: IInitialValues; values: IInitialValues }) => <GroupsInputs {...props} />}
            </Formik>
        </Wrapper>
    );
};
const Wrapper = styled.main`
    margin-top: 50px;
    width: 100%;
    padding-left: 20px;
`;
export default Groups;
