import React from 'react';
import styled from 'styled-components';
import { IDragColumn } from '../models';
import { useDragCol } from '../hooks/useDragCol';
import Column from './Column';

const DraggableColumn: React.FC<IDragColumn> = ({ id }) => {
    const { drop, drag, isDragging, originalIndex } = useDragCol(id);

    return (
        <Wrapper ref={(node) => drag(drop(node))}>
            <Column colID={originalIndex} groupID={id} isDragging={isDragging} />
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
