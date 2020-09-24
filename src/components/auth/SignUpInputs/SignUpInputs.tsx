import React from 'react';
import styled from 'styled-components';
import { Field, Form } from 'formik';
import Input from '../../common/Input';
import SubmitButton from '../../common/SubmitButton';
import { Fields } from '../enums';

interface ISignUpInputs {
    errors: {
        email?: string;
        password?: string;
    };
}

const SignUpInputs: React.FC<ISignUpInputs> = ({ errors }) => {
    const { email, password } = errors;
    return (
        <FormWrapper>
            <Field
                label={Fields.EMAIL}
                name={Fields.EMAIL}
                placeholder={Fields.EMAIL}
                component={Input}
                error={email}
                value={email}
            />
            <Field
                label={Fields.PASSWORD}
                name={Fields.PASSWORD}
                placeholder={Fields.PASSWORD}
                type={Fields.PASSWORD}
                component={Input}
                error={password}
                value={password}
            />
            <SubmitButton text="create new account" secondary={true} />
        </FormWrapper>
    );
};
const FormWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0;
`;
export default SignUpInputs;
