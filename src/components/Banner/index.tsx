import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors, FontWeight, FontSize } from '../../assets/const';
import { Routes } from '../../config/Routing/Routes';
const Banner: React.FC = () => {
    return (
        <Wrapper>
            <Logo to={Routes.TABLE}>tasker</Logo>
            <NewProject to={Routes.NEW_PROJECT}>Projects</NewProject>
            <OptionsWrapper>
                <Settings />
                <Avatar />
            </OptionsWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 2px solid ${Colors.QUATERNARY};
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    z-index: 3;
    background-color: white;
`;
const Logo = styled(Link)`
    color: ${Colors.SECONDARY};
    font-weight: ${FontWeight.BOLD};
    font-size: ${FontSize.LOGO_MOBILE};
`;
const NewProject = styled(Link)`
    color: ${Colors.MAIN};
    background-color: ${Colors.SECONDARY};
    padding: 5px 10px;
    border-radius: 5px;
`;
const OptionsWrapper = styled.div`
    display: flex;
    width: 80px;
    justify-content: right;
`;
const Avatar = styled.div`
    margin-left: 10px;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    background-color: ${Colors.QUATERNARY};
`;
const Settings = styled.div`
    border-radius: 50%;
    height: 30px;
    width: 30px;
    background-color: ${Colors.QUATERNARY};
`;
export default Banner;
