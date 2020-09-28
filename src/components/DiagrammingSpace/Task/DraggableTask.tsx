import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../assets/const';
import { useTasksData } from '../../common/hooks/useTasksData';
import { useDragTask } from '../hooks/useDragTask';
import { useModal } from '../hooks/useModal';
import { IDragTask } from '../models';
import Task from './Task';
import TaskModal from './TaskModal';

const DraggableTask: React.FC<IDragTask> = ({ id, colID, groupID, group }) => {
    const { drop, drag } = useDragTask(colID, id, groupID, group);
    const { data } = useTasksData(id);
    const { modalOpen, handleModal } = useModal();
    return (
        <>
            <Wrapper ref={(node) => drag(drop(node))} onClick={handleModal}>
                {data && data ? <Task taskName={data.taskName} desc={data.desc} /> : null}
            </Wrapper>
            <TaskModal
                modalOpen={modalOpen}
                handleModal={handleModal}
                data={data}
                id={id}
                group={group}
                groupID={groupID}
            />
        </>
    );
};
const Wrapper = styled.div`
    width: 100%;
    margin: 5px 0;
    padding: 10px 5px;
    background: ${Colors.MAIN};
    color: ${Colors.TERITIARY};
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export default DraggableTask;
