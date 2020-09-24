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
            <ContentWrapper>
                <Title>Sign Up to tasker</Title>
                <Formik
                    initialValues={initialValues}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validationSchema={validationSchema}
                    onSubmit={signUpSubmit}
                >
                    {(props: { errors: string }) => <SignUpInputs {...props} />}
                </Formik>
                <NavLinks register />
            </ContentWrapper>
        </Wrapper>
    );
};
const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
`;
const ContentWrapper = styled.section`
    display: flex;
    width: 320px;
    flex-direction: column;
    align-items: center;
    margin: 150px 0;
    padding: 75px 0;
    background-color: ${Colors.QUATERNARY};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const Title = styled.h1`
    font-size: ${FontSize.BIG_HEADER_MOBILE};
    color: ${Colors.SECONDARY};
`;

export default SignUpView;
