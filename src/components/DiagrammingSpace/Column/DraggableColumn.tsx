import React from 'react';
import styled from 'styled-components';
import { IDragColumn } from '../models';
import Column from './Column';
import { useDragCol } from '../hooks/useDragCol';

const DraggableColumn: React.FC<IDragColumn> = ({ id, moveCol, findCol }) => {
    const { drop, drag, isDragging, originalIndex } = useDragCol(findCol, moveCol, id);
    return (
        <Wrapper ref={(node) => drag(drop(node))}>
            <Column isDragging={isDragging} colId={originalIndex} groupId={id} />
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
