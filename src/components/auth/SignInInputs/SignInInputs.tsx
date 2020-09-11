import React from 'react';
import styled from 'styled-components';
import { Field, Form } from 'formik';
import { Fields } from '../enums';
import Input from '../../common/Input';
import SubmitButton from '../../common/SubmitButton';

interface ISignIpInputs {
    errors: {
        email?: string;
        password?: string;
    };
}

const SignInInputs: React.FC<ISignIpInputs> = ({ errors }) => {
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
            <SubmitButton text="sign in" />
        </FormWrapper>
    );
};
const FormWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0;
`;
export default SignInInputs;
