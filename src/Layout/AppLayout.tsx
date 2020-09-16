import React, { ReactNode, useContext } from 'react';
import styled from 'styled-components';
import { Colors } from '../assets/const';
import Banner from '../components/Banner';
import Sidebar from '../components/Sidebar';
import { store } from '../config/store';

interface IApp {
    children: ReactNode;
}

const AppLayout: React.FC<IApp> = ({ children }) => {
    const { sidebarOpen } = useContext(store);
    return (
        <Wrapper>
            <Banner />
            <MainSection>
                <Sidebar />
                <ContentWrapper sidebarOpen={sidebarOpen}> {children} </ContentWrapper>
            </MainSection>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
    background-color: ${Colors.MAIN};
    flex-direction: column;
    min-height: 100vh;
`;
const MainSection = styled.main`
    display: flex;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
`;
const ContentWrapper = styled.span<{ sidebarOpen: boolean }>`
    width: 100%;
    transform: ${({ sidebarOpen }) => (sidebarOpen ? 'translateX(300px)' : null)};
    transition: 0.5s ease-in-out;
`;
export default AppLayout;
