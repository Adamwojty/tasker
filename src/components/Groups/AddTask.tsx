import React from 'react';
import { Formik } from 'formik';

import styled from 'styled-components';
import { Colors, FontSize } from '../../assets/const';
import TaskInputs from './TaskInputs';
import { taskValidationSchema } from './actions/validationSchema';

interface IInitialValues {
    taskName: string;
    desc: string;
    groupID: string;
}

const AddTask: React.FC = () => {
    const initialValues: IInitialValues = { taskName: '', desc: '', groupID: '' };
    return (
        <>
            <Title>Create new task:</Title>
            <Formik
                initialValues={initialValues}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={taskValidationSchema}
                onSubmit={
                    (values, action) => console.log(values)
                    // submitGroup({ values, action, projectID: activeProject?.id })
                }
            >
                {(props: {
                    errors: IInitialValues;
                    values: IInitialValues;
                    handleChange: (e: React.ChangeEvent<unknown>) => void;
                    handleBlur: (e: unknown) => void;
                }) => <TaskInputs {...props} />}
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
export default AddTask;
