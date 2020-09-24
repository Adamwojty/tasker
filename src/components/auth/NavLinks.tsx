import React from 'react';
import styled from 'styled-components';
import { Routes } from '../../config/Routing/Routes';
import { Link } from 'react-router-dom';
import { Colors, FontSize } from '../../assets/const';

interface INavLinks {
    register: boolean;
}

const NavLinks: React.FC<INavLinks> = ({ register }) => (
    <Wrapper>
        {register ? <Nav to={Routes.SIGN_IN}>already registered?</Nav> : <Nav to={Routes.SIGN_UP}>sign up</Nav>}
        <Nav to={Routes.MAIN}>go back</Nav>
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
`;
const Nav = styled(Link)`
    display: block;
    padding: 10px 15px;
    border-radius: 5px;
    margin-bottom: 10px;
    color: ${Colors.SECONDARY};
    font-size: ${FontSize.TEXT_MOBILE};
    background-color: ${Colors.MAIN};
    :nth-of-type(2) {
        margin-left: 10px;
    }
    :hover {
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
`;
export default NavLinks;
