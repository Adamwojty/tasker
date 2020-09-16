import React from 'react';
import styled from 'styled-components';
import { Colors, FontSize } from '../../assets/const';

interface ITask {
    title: string;
    desc: string;
}

const Task: React.FC<ITask> = ({ title, desc }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <p>{desc}</p>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    background-color: ${Colors.QUINARY};
    margin-bottom: 5px;
    border-radius: 5px;
    padding: 5px;
`;
const Title = styled.h4`
    font-size: ${FontSize.TEXT_MOBILE};
`;
export default Task;
