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
            <ContentWrapper>
                <Title>Sign In to taski</Title>
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
export default SignInView;
