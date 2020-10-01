import React from 'react';
import styled from 'styled-components';
import { Field, Form } from 'formik';
import Input from '../common/Input';
import SubmitButton from '../common/SubmitButton';

enum Fields {
    PROJECT_ID_NAME = 'projectID',
    PROJECT_ID_PLACEHOLDER = 'enter projectID',
}
interface IProjectJoinInputs {
    errors: { projectID?: string };
    values: { projectID: string };
}

const ProjectJoinInputs: React.FC<IProjectJoinInputs> = ({ errors, values }) => {
    return (
        <FormWrapper>
            <Field
                label={Fields.PROJECT_ID_NAME}
                name={Fields.PROJECT_ID_NAME}
                placeholder={Fields.PROJECT_ID_PLACEHOLDER}
                component={Input}
                error={errors.projectID}
                value={values.projectID}
            />
            <SubmitButton text="join existing project" />
        </FormWrapper>
    );
};
const FormWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export default ProjectJoinInputs;
