import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../assets/const';
import { useTasksData } from '../../common/hooks/useTasksData';
import { useDragTask } from '../hooks/useDragTask';
import { IDragTask } from '../models';
import Task from './Task';
import TaskModal from './TaskModal';

const DraggableTask: React.FC<IDragTask> = ({ id, moveTask, findTask, colId, groupId }) => {
    const { data } = useTasksData(id);
    const { drop, drag } = useDragTask(findTask, moveTask, colId, id, groupId, data);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleModal = useCallback(() => {
        return setModalOpen(!modalOpen);
    }, [modalOpen]);

    return (
        <>
            <Wrapper ref={(node) => drag(drop(node))} onClick={handleModal}>
                <Task taskName={data?.taskName} desc={data?.desc} />
            </Wrapper>
            <TaskModal modalOpen={modalOpen} handleModal={handleModal} data={data} />
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
