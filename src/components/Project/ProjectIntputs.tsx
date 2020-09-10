import React from 'react';
import styled from 'styled-components';
import { Field, Form } from 'formik';
import Input from '../common/Input';
import SubmitButton from '../common/SubmitButton';
import { projectSubmit } from './actions/projectSubmit';

interface IProjectInputs {
    errors: {
        projectName?: string;
        desc?: string;
    };
}
enum Fields {
    PROJECT_NAME = 'projectName',
    PROJECT_PLACEHOLDER = 'project name',
    DESC = 'desc',
    DESC_NAME = 'description',
}

const ProjectInputs: React.FC<IProjectInputs> = ({ errors }) => {
    const { projectName, desc } = errors;
    return (
        <FormWrapper>
            <Field
                label={Fields.PROJECT_NAME}
                name={Fields.PROJECT_NAME}
                placeholder={Fields.PROJECT_PLACEHOLDER}
                component={Input}
                error={projectName}
                value={projectSubmit}
            />
            <Field
                label={Fields.DESC}
                name={Fields.DESC}
                placeholder={Fields.DESC_NAME}
                component={Input}
                error={desc}
                value={desc}
            />
            <SubmitButton text="create new project" />
        </FormWrapper>
    );
};
const FormWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
`;
export default ProjectInputs;
