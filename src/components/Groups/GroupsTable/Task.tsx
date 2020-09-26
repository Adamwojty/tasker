import React from 'react';
import styled from 'styled-components';
import { Colors, FontSize } from '../../../assets/const';
import { useTasksData } from '../../common/hooks/useTasksData';

interface ITask {
    id: string;
}

const Task: React.FC<ITask> = ({ id }) => {
    const { data } = useTasksData(id);
    return (
        <Wrapper>
            <Title>{data?.taskName}</Title>
            <p>{data?.desc}</p>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    background-color: ${Colors.QUINARY};
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const Title = styled.h4`
    font-size: ${FontSize.TEXT_MOBILE};
`;
export default Task;
