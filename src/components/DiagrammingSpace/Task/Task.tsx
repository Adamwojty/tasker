import React from 'react';
import styled from 'styled-components';
import { FontSize } from '../../../assets/const';
import { ITask } from '../models';

const Task: React.FC<ITask> = ({ taskName, desc }) => {
    return (
        <>
            <Title>{taskName}</Title>
            <Desc>{desc}</Desc>
        </>
    );
};

const Title = styled.h4`
    font-size: ${FontSize.MID_HEADER_MOBILE};
`;
const Desc = styled.p`
    font-size: ${FontSize.TEXT_MOBILE};
`;
export default Task;
