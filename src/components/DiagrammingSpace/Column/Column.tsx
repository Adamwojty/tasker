import React from 'react';
import styled from 'styled-components';
import { Colors, FontSize, FontWeight } from '../../../assets/const';
import { ICol } from '../models';
import { useTaskDrop } from '../hooks/useDropTask';
import Spinner from '../../common/Spinner';
import DraggableTask from '../Task/DraggableTask';
import { useGroupData } from '../../common/hooks/useGroupData';

const Column: React.FC<ICol> = ({ isDragging, colID, groupID }) => {
    const { group } = useGroupData(groupID);
    const { drop } = useTaskDrop(colID, groupID);
    return (
        <>
            <Title isDragging={isDragging}>{group?.groupName}</Title>
            <Col ref={drop}>
                {group ? (
                    group.taskOrder.map((task: { id: string }) => (
                        <DraggableTask key={task.id} id={task.id} colID={colID} groupID={groupID} group={group} />
                    ))
                ) : (
                    <Spinner />
                )}
            </Col>
        </>
    );
};
const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    width: 250px;
    min-height: 600px;
    background-color: ${Colors.QUINARY};
    padding: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const Title = styled.div<{ isDragging: boolean }>`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    font-size: ${FontSize.HEADER_MOBILE};
    font-weight: ${FontWeight.BOLD};
    text-align: center;
    background-color: ${({ isDragging }) => (isDragging ? Colors.SECONDARY : Colors.QUINARY)};
    color: ${({ isDragging }) => (isDragging ? Colors.MAIN : Colors.TERITIARY)};
    margin-bottom: 10px;
    padding-top: 10px;
    height: 80px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export default Column;
