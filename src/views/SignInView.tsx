import React, { useContext } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { store } from '../config/store';
import SignInInputs from '../components/auth/SignInInputs';
import { validationSchema } from '../components/auth/actions/validationSchema';
import { FontSize, Colors } from '../assets/const';
import { signInSubmit } from '../components/auth/actions/signInSubmit';
import NavLinks from '../components/auth/NavLinks';
import { useHistory } from 'react-router';

interface IInitialValues {
    email: string;
    password: string;
}
const SignInView: React.FC = () => {
    const initialValues: IInitialValues = { email: '', password: '' };
    const { dispatch } = useContext(store);
    const history = useHistory();
    return (
        <Wrapper>
            <Title>Sign In to tasker</Title>
            <Formik
                initialValues={initialValues}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={validationSchema}
                onSubmit={(values, action) => signInSubmit({ values, action, dispatch, history })}
            >
                {(props: { errors: string }) => <SignInInputs {...props} />}
            </Formik>
            <NavLinks register={false} />
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
export default SignInView;
