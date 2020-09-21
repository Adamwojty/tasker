import React, { useCallback, useState } from 'react';
import update from 'immutability-helper';
import styled from 'styled-components';
import { Colors, FontSize, FontWeight } from '../../../assets/const';
import { ItemTypes } from '../ItemTypes';
import { ICol, ITask } from '../models';
import DraggableTask from '../Task/DraggableTask';
import { useDrop } from 'react-dnd';

const Column: React.FC<ICol> = ({ text, isDragging, tasks }) => {
    const [taskOrder, setTaskOrder] = useState<ITask[]>(tasks);

    const moveTask = useCallback(
        (id: string, atIndex: number) => {
            const { item, index } = findTask(id);
            setTaskOrder(
                update(taskOrder, {
                    $splice: [
                        [index, 1],
                        [atIndex, 0, item],
                    ],
                }),
            );
        },
        [taskOrder],
    );
    const findTask = useCallback(
        (id: string) => {
            const item = taskOrder.filter((c) => `${c.id}` === id)[0];
            const index = taskOrder.indexOf(item);
            return {
                item,
                index,
            };
        },
        [taskOrder],
    );
    const renderTask = (task: ITask, findTask: any, moveTask: any) => {
        return <DraggableTask {...task} key={task.id} moveTask={moveTask} findTask={findTask} />;
    };

    const [, drop] = useDrop({ accept: ItemTypes.ITEM });
    return (
        <>
            <Title isDragging={isDragging}>{text}</Title>
            <Col ref={drop}>{taskOrder && taskOrder.map((task: ITask) => renderTask(task, findTask, moveTask))}</Col>
        </>
    );
};
const Col = styled.div`
    border-radius: 5px;
    width: 250px;
    min-height: 600px;
    background-color: ${Colors.QUINARY};
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
