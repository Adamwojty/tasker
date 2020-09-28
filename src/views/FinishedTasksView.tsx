import React from 'react';
import styled from 'styled-components';
import FinishedTasksList from '../components/FinishedTasks/FinishedTasksList';

const FinishedTasksView: React.FC = () => {
    return (
        <Wrapper>
            <FinishedTasksList />
        </Wrapper>
    );
};
const Wrapper = styled.main`
    margin-top: 50px;
    width: 100%;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export default FinishedTasksView;
