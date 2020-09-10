import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Colors } from '../assets/const';
import Banner from '../components/Banner';
import Sidebar from '../components/Sidebar';

interface IApp {
    children: ReactNode;
}

const AppLayout: React.FC<IApp> = ({ children }) => {
    return (
        <Wrapper>
            <Banner />
            <MainSection>
                <Sidebar />
                {children}
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
    overflow-x: auto;
`;
export default AppLayout;
