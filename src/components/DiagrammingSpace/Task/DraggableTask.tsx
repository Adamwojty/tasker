import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../assets/const';
import { useTasksData } from '../../common/hooks/useTasksData';
import { useDragTask } from '../hooks/useDragTask';
import { IDragTask } from '../models';
import Task from './Task';

const DraggableTask: React.FC<IDragTask> = ({ id, moveTask, findTask, colId, groupId }) => {
    const { drop, drag } = useDragTask(findTask, moveTask, colId, id, groupId);
    const { data } = useTasksData(id, groupId);
    return (
        <Wrapper ref={(node) => drag(drop(node))}>
            <Task taskName={data?.taskName} desc={data?.desc} />
        </Wrapper>
    );
};
const Wrapper = styled.div`
    width: 100%;
    margin: 5px 0;
    padding: 10px 5px;
    background: ${Colors.MAIN};
    color: ${Colors.TERITIARY};
`;

export default DraggableTask;
