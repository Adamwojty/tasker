import React from 'react';
import styled from 'styled-components';
import { Field, Form } from 'formik';
import Input from '../common/Input';
import SubmitButton from '../common/SubmitButton';
interface IGroupsInputs {
    errors: {
        groupName: string;
    };
    values: {
        groupName: string;
    };
}
enum Fields {
    GROUP_NAME = 'groupName',
    GROUP_PLACEHOLDER = 'new group name',
}

const GroupsInputs: React.FC<IGroupsInputs> = ({ errors, values }) => {
    return (
        <FormWrapper>
            <Field
                label={Fields.GROUP_NAME}
                name={Fields.GROUP_NAME}
                placeholder={Fields.GROUP_PLACEHOLDER}
                component={Input}
                error={errors.groupName}
                value={values.groupName}
            />
            <SubmitButton text="create new group" />
        </FormWrapper>
    );
};
const FormWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
`;
export default GroupsInputs;
