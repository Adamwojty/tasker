import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../assets/const';
import Banner from '../components/Banner';
import Sidebar from '../components/Sidebar';
const AppView: React.FC = () => {
    return (
        <Wrapper>
            <Banner />
            <MainSection>
                <Sidebar />
            </MainSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    background-color: ${Colors.MAIN};
    flex-direction: column;
    height: 100vh;
`;
const MainSection = styled.main`
    display: flex;
    height: 100%;
    overflow-x: hidden;
`;
export default AppView;
