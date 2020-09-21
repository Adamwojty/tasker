import React from 'react';
import styled from 'styled-components';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';
import { IDragColumn, IDragCol } from '../models';
import Column from './Column';

const DraggableColumn: React.FC<IDragColumn> = ({ id, text, moveCol, findCol }) => {
    const originalIndex = findCol(id).index;
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.COLUMN, id, originalIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (dropResult, monitor) => {
            const { id: droppedId, originalIndex } = monitor.getItem();
            const didDrop = monitor.didDrop();
            if (!didDrop) {
                moveCol(droppedId, originalIndex);
            }
        },
    });

    const [, drop] = useDrop({
        accept: ItemTypes.COLUMN,
        canDrop: () => false,
        hover({ id: draggedId }: IDragCol) {
            if (draggedId !== id) {
                const { index: overIndex } = findCol(id);
                moveCol(draggedId, overIndex);
            }
        },
    });
    return (
        <Wrapper ref={(node) => drag(drop(node))}>
            <Column isDragging={isDragging} text={text} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 250px;
`;

export default DraggableColumn;
