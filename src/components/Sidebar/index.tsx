import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../../assets/const';
import { store } from '../../config/store';
import { setSidebarOpen } from '../../config/store/actions';
import Header from './Header';
import Navigation from './Navigation';
import NavIcon from '../../assets/img/icons/nav.svg';

const Sidebar: React.FC = () => {
    const { sidebarOpen, dispatch, activeProject } = React.useContext(store);

    const handleOpenNav = React.useCallback(() => {
        if (activeProject) {
            return dispatch(setSidebarOpen());
        }
    }, [activeProject]);
    return (
        <Wrapper active={sidebarOpen}>
            <Header />
            <Navigation handleOpenNav={handleOpenNav} />
            <Status onClick={handleOpenNav} url={NavIcon} open={sidebarOpen} />
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
const Status = styled.button<{ url: string; open: boolean }>`
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
    background-image: ${({ url }) => `url(${url})`};
    background-position: center;
    background-repeat: no-repeat;
    transition: 0.5s ease-in-out;
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
