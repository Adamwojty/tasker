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
    projects?: string[];
}
const validateProject = (value: string, error: string, projects?: string[]) => {
    console.log(projects, value);
    if (projects?.includes(value)) {
        error = `you're already member of this project`;
    }
    return error;
};

const ProjectJoinInputs: React.FC<IProjectJoinInputs> = ({ errors, values, projects }) => {
    return (
        <FormWrapper>
            <Field
                label={Fields.PROJECT_ID_NAME}
                name={Fields.PROJECT_ID_NAME}
                placeholder={Fields.PROJECT_ID_PLACEHOLDER}
                component={Input}
                error={errors.projectID}
                value={values.projectID}
                validate={(value: string, error: string) => validateProject(value, error, projects)}
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
