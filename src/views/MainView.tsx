import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Routes } from '../config/Routing/Routes';
import LogoIcon from '../assets/img/icons/Logo.svg';
import { Colors, FontSize } from '../assets/const';

const MainView: React.FC = () => {
    return (
        <Wrapper>
            <ContentWrapper>
                <LogoContainer>
                    <Logo url={LogoIcon} />
                    <Title>taski</Title>
                </LogoContainer>
                <LinkContainer>
                    <StyledLink to={Routes.SIGN_IN}>Sign In</StyledLink>
                    <StyledLink to={Routes.SIGN_UP}>Sign Up</StyledLink>
                </LinkContainer>
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
const LogoContainer = styled.header`
    display: flex;
    margin-bottom: 100px;
`;
const Logo = styled.div<{ url: string }>`
    background-image: ${({ url }) => `url(${url})`};
    background-position: center;
    background-repeat: no-repeat;
    height: 40px;
    width: 40px;
    margin-right: 10px;
`;
const Title = styled.h1`
    color: ${Colors.SECONDARY};
    font-size: ${FontSize.BIG_HEADER_MOBILE};
`;
const LinkContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`;
const StyledLink = styled(Link)`
    font-size: ${FontSize.TEXT_MOBILE};
    padding: 10px 15px;
    border-radius: 5px;
    background-color: ${Colors.MAIN};
    color: ${Colors.SECONDARY};
    :hover {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
`;

export default MainView;
