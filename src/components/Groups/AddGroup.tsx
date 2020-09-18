import React, { useContext } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { store } from '../../config/store';
import { Colors, FontSize } from '../../assets/const';
import GroupsInputs from './GroupsInputs';
import { submitGroup } from './actions/submitGroup';
import { validationSchema } from './actions/validationSchema';

interface IInitialValues {
    groupName: string;
}

const AddGroup: React.FC = () => {
    const initialValues: IInitialValues = { groupName: '' };
    const { activeProject } = useContext(store);
    return (
        <>
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
        </>
    );
};
const Title = styled.h1`
    margin-bottom: 10px;
    text-align: center;
    font-size: ${FontSize.BIG_HEADER_MOBILE};
    color: ${Colors.SECONDARY};
`;
export default AddGroup;
