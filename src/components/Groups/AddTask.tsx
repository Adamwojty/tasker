import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { Colors, FontSize } from '../../assets/const';
import TaskInputs from './TaskInputs';
import { taskValidationSchema } from './actions/validationSchema';
import { submitTask } from './actions/submitTask';

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
                onSubmit={(values, action) => submitTask({ values, action })}
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
