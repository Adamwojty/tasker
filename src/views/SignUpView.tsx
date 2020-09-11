import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import SignUpInputs from '../components/auth/SignUpInputs';
import { FontSize, Colors } from '../assets/const';
import { signUpSubmit } from '../components/auth/actions/signUpSubmit';
import { validationSchema } from '../components/auth/actions/validationSchema';
import NavLinks from '../components/auth/NavLinks';

interface IInitialValues {
    email: string;
    password: string;
}

const SignUpView: React.FC = () => {
    const initialValues: IInitialValues = { email: '', password: '' };
    return (
        <Wrapper>
            <Title>Sign Up to tracker</Title>
            <Formik
                initialValues={initialValues}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={validationSchema}
                onSubmit={signUpSubmit}
            >
                {(props: { errors: string }) => <SignUpInputs {...props} />}
            </Formik>
            <NavLinks register={true} />
        </Wrapper>
    );
};
const Wrapper = styled.main`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    font-size: ${FontSize.BIG_HEADER_MOBILE};
    color: ${Colors.SECONDARY};
`;

export default SignUpView;
