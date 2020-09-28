import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { ItemTypes } from './ItemTypes';
import DraggableColumn from './Column/DraggableColumn';
import { store } from '../../config/store';

const DiagramingSpace: React.FC = () => {
    const { groupsOrder } = useContext(store);
    const [, drop] = useDrop({ accept: ItemTypes.COLUMN });

    return (
        <Wrapper>
            <DraggableSpace ref={drop}>
                {groupsOrder.map((col: { id: string }) => (
                    <DraggableColumn key={col.id} id={col.id} />
                ))}
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
