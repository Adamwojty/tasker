import React, { useContext } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { store } from '../../config/store';
import { submitGroup } from './actions/submitGroup';
import { validationSchema } from './actions/validationSchema';
import GroupsInputs from './GroupsInputs';
import GroupsTable from './GroupsTable';
import { Colors, FontSize } from '../../assets/const';

interface IInitialValues {
    groupName: string;
}

const Groups: React.FC = () => {
    const initialValues: IInitialValues = { groupName: '' };
    const { activeProject } = useContext(store);
    return (
        <Wrapper>
            <Title>Create new group:</Title>
            <Formik
                initialValues={initialValues}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={validationSchema}
                onSubmit={(values, action) => submitGroup({ values, action, projectID: activeProject?.id })}
            >
                {(props: { errors: IInitialValues; values: IInitialValues }) => <GroupsInputs {...props} />}
            </Formik>
            <GroupsTable />
        </Wrapper>
    );
};
const Wrapper = styled.main`
    margin-top: 50px;
    width: 100%;
    padding-left: 20px;
`;
const Title = styled.h1`
    margin-bottom: 10px;
    text-align: center;
    font-size: ${FontSize.BIG_HEADER_MOBILE};
    color: ${Colors.SECONDARY};
`;
export default Groups;
