import React from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { ItemTypes } from './ItemTypes';
import { renderColumn } from './actions/renderColumn';
import { useDiagramActions } from './hooks/useDiagramActions';

const DiagramingSpace: React.FC = () => {
    const { moveCol, findCol, groupsOrder } = useDiagramActions();
    const [, drop] = useDrop({ accept: ItemTypes.COLUMN });

    return (
        <Wrapper>
            <DraggableSpace ref={drop}>
                {groupsOrder.map((col: { id: string }) => renderColumn(col.id, findCol, moveCol))}
            </DraggableSpace>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    transform: translateX(20px);
    min-height: 600px;
`;
const DraggableSpace = styled.div`
    display: flex;
    min-width: 100%;
    height: 100%;
    overflow-x: auto;
`;
export default DiagramingSpace;
