import React, { useCallback, useContext } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { ItemTypes } from './ItemTypes';
import DraggableColumn from './Column';
import { store } from '../../config/store';

const DiagramingSpace: React.FC = () => {
    const { activeProject } = useContext(store);
    const moveCol = (id: string, atIndex?: number) => {
        if (activeProject) {
            const { column, index } = findCol(id);
        }
    };

    const findCol = (id: string) => {
        const column = activeProject?.groupsOrder.filter((c) => `${c.id}` === id)[0];
        let index;
        if (column) {
            index = activeProject?.groupsOrder.indexOf(column);
        }
        return {
            column,
            index,
        };
    };

    const renderColumn = useCallback((col: { id: string; groupName: string }) => {
        return <DraggableColumn key={col.id} id={col.id} text={col.groupName} moveCol={moveCol} findCol={findCol} />;
    }, []);
    const [, drop] = useDrop({ accept: ItemTypes.COLUMN });

    return (
        <Wrapper>
            <DraggableSpace ref={drop}>
                {activeProject &&
                    activeProject.groupsOrder.map((col: { id: string; groupName: string }) => renderColumn(col))}
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
