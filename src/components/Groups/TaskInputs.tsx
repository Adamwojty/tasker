import React, { useContext } from 'react';
import { Field, Form } from 'formik';

import styled from 'styled-components';
import Input from '../common/Input';
import SubmitButton from '../common/SubmitButton';
import { Colors } from '../../assets/const';
import { store } from '../../config/store';

interface IGroupsInputs {
    errors: {
        taskName: string;
        desc: string;
        groupID: string;
    };
    values: {
        taskName: string;
        desc: string;
        groupID: string;
    };
    handleChange: (e: React.ChangeEvent<unknown>) => void;
    handleBlur: (e: unknown) => void;
}
enum Fields {
    TASK_NAME = 'taskName',
    TASK_PLACEHOLDER = 'new task name',
    DESC_NAME = 'desc',
    DESC_PLACEHOLDER = 'description',
    GROUP_NAME = 'groupID',
    GROUP_PLACEHOLDER = 'select group',
}

const TaskInputs: React.FC<IGroupsInputs> = ({ values, errors, handleChange, handleBlur }) => {
    const { activeProject } = useContext(store);
    return (
        <FormWrapper>
            <Field
                label={Fields.TASK_NAME}
                name={Fields.TASK_NAME}
                placeholder={Fields.TASK_PLACEHOLDER}
                component={Input}
                error={errors.taskName}
                value={values.taskName}
            />
            <Field
                label={Fields.DESC_NAME}
                name={Fields.DESC_NAME}
                placeholder={Fields.DESC_PLACEHOLDER}
                component={Input}
                error={errors.desc}
                value={values.desc}
            />
            <Select
                error={errors.groupID}
                name={Fields.GROUP_NAME}
                value={values.groupID}
                onChange={handleChange}
                onBlur={handleBlur}
            >
                <option value="">Select group:</option>
                {activeProject?.groupsOrder.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.groupName}
                    </option>
                ))}
            </Select>
            <SubmitButton text="create new task" />
        </FormWrapper>
    );
};
const FormWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Select = styled.select<{ error: string }>`
    width: 250px;
    padding: 10px 5px;
    border-radius: 5px;
    border: ${({ error }) => (error ? `1px solid ${Colors.ERROR}` : `1px solid ${Colors.SECONDARY}`)};
    margin-bottom: 15px;
`;
export default TaskInputs;
