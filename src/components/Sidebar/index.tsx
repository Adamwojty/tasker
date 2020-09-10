import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../../assets/const';
import Header from './Header';
import Navigation from './Navigation';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(true);

    const handleOpenNav = React.useCallback(() => {
        return setIsOpen(!isOpen);
    }, [isOpen]);

    return (
        <Wrapper active={isOpen}>
            <Header />
            <Navigation />
            <Status onClick={handleOpenNav} />
        </Wrapper>
    );
};
const Wrapper = styled.section<{ active: boolean }>`
    background-color: ${Colors.QUATERNARY};
    width: 320px;
    position: fixed;
    bottom: 0;
    top: 47px;
    border-right: 2px solid ${Colors.NAV_HOVER};
    z-index: 2;
    transform: ${({ active }) => (active ? 'translateX(-300px)' : null)};
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
