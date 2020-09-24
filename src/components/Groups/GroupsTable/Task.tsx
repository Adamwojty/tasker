import React from 'react';
import styled from 'styled-components';
import { Colors, FontSize } from '../../../assets/const';
import { useTasksData } from '../../common/hooks/useTasksData';

interface ITask {
    id: string;
    groupID: string;
}

const Task: React.FC<ITask> = ({ id, groupID }) => {
    const { data } = useTasksData(id, groupID);
    return (
        <Wrapper>
            <Title>{data?.taskName}</Title>
            <p>{data?.desc}</p>
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
