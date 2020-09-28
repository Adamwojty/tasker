import React from 'react';
import styled from 'styled-components';
import { FontSize } from '../../../assets/const';

interface ITask {
    taskName: string;
    desc: string;
}

const Task: React.FC<ITask> = ({ taskName, desc }) => {
    return (
        <>
            <Title>{taskName}</Title>
            <p>{desc}</p>
        </>
    );
};
const Title = styled.h4`
    font-size: ${FontSize.TEXT_MOBILE};
`;
export default Task;
