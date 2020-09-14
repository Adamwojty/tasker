import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../../assets/const';
import { store } from '../../config/store';
import { setSidebarOpen } from '../../config/store/actions';
import Header from './Header';
import Navigation from './Navigation';

const Sidebar: React.FC = () => {
    const { sidebarOpen, dispatch } = React.useContext(store);
    const handleOpenNav = React.useCallback(() => {
        return dispatch(setSidebarOpen());
    }, []);
    return (
        <Wrapper active={sidebarOpen}>
            <Header />
            <Navigation handleOpenNav={handleOpenNav} />
            <Status onClick={handleOpenNav} />
        </Wrapper>
    );
};
const Wrapper = styled.section<{ active: boolean }>`
    background-color: ${Colors.QUATERNARY};
    width: 320px;
    position: fixed;
    bottom: 0;
    top: 50px;
    border-right: 2px solid ${Colors.NAV_HOVER};
    z-index: 2;
    transform: ${({ active }) => (active ? null : 'translateX(-300px)')};
    transition: 0.5s ease-in-out;
`;
const Status = styled.button`
    outline: none;
    position: absolute;
    top: 40px;
    right: -15px;
    width: 30px;
    height: 30px;
    background-color: ${Colors.SECONDARY};
    border-radius: 50%;
`;

export default Sidebar;
