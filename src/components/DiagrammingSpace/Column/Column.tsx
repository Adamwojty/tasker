import React from 'react';
import styled from 'styled-components';
import { Colors, FontSize, FontWeight } from '../../../assets/const';
import { ItemTypes } from '../ItemTypes';
import { ICol } from '../models';
import { useDrop } from 'react-dnd';
import { renderTask } from '../actions/renderTask';
import { useGroupsData } from '../../common/hooks/useGroupsData';
import { useTaskActions } from '../hooks/useTaskActions';
import Spinner from '../../common/Spinner';

const Column: React.FC<ICol> = ({ isDragging, colId, groupId }) => {
    const { group } = useGroupsData(groupId);
    const { findTask, moveTask } = useTaskActions();
    const [, drop] = useDrop({ accept: ItemTypes.ITEM });

    return (
        <>
            <Title isDragging={isDragging}>{group?.groupName}</Title>
            <Col ref={drop}>
                {group?.taskOrder.length ? (
                    group.taskOrder.map((task: { id: string }) => renderTask(task, findTask, moveTask, colId, groupId))
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
`;

export default Column;
