import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled from 'styled-components';
import { Colors } from '../../../assets/const';
import { ItemTypes } from '../ItemTypes';
import { IDragTask } from '../models';
import Task from './Task';

const DraggableTask: React.FC<IDragTask> = ({ taskName, desc, id, moveTask, findTask }) => {
    const originalIndex = findTask(id).index;
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.ITEM, id, originalIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (dropResult, monitor) => {
            const { id: droppedId, originalIndex } = monitor.getItem();
            const didDrop = monitor.didDrop();
            if (!didDrop) {
                console.log('drop');
                moveTask(droppedId, originalIndex);
            }
        },
    });

    const [, drop] = useDrop({
        accept: ItemTypes.ITEM,
        canDrop: () => false,
        hover({ id: draggedId }: any) {
            if (draggedId !== id) {
                const { index: overIndex } = findTask(id);
                moveTask(draggedId, overIndex);
            }
        },
    });
    return (
        <Wrapper ref={(node) => drag(drop(node))}>
            <Task taskName={taskName} desc={desc} id={id} />
        </Wrapper>
    );
};
const Wrapper = styled.div`
    margin: 5px;
    padding: 10px 5px;
    background: ${Colors.MAIN};
    color: ${Colors.TERITIARY};
`;

export default DraggableTask;
