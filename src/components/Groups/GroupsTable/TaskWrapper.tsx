import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../assets/const';
import { useTasksData } from '../../common/hooks/useTasksData';
import Task from '../../DiagrammingSpace/Task/Task';

interface ITask {
    id: string;
}

const TaskWrapper: React.FC<ITask> = ({ id }) => {
    const { data } = useTasksData(id);
    return <Wrapper>{data && data ? <Task taskName={data.taskName} desc={data.desc} /> : null}</Wrapper>;
};
const Wrapper = styled.div`
    background-color: ${Colors.QUINARY};
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export default TaskWrapper;
