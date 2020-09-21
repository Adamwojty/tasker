import React, { useCallback, useContext, useState, useEffect } from 'react';
import update from 'immutability-helper';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { ItemTypes } from './ItemTypes';
import { store } from '../../config/store';
import { renderColumn } from './actions/renderColumn';
import { IGroups } from './models';

const DiagramingSpace: React.FC = () => {
    const { activeProject } = useContext(store);
    const [columns, setColumns] = useState<IGroups[]>([]);

    const moveCol = useCallback(
        (id: string, atIndex: number) => {
            const { column, index } = findCol(id);
            setColumns(
                update(columns, {
                    $splice: [
                        [index, 1],
                        [atIndex, 0, column],
                    ],
                }),
            );
        },
        [columns],
    );

    const findCol = useCallback(
        (id: string) => {
            const column = columns.filter((c) => `${c.id}` === id)[0];
            const index = columns.indexOf(column);
            return {
                column,
                index,
            };
        },
        [columns],
    );

    const [, drop] = useDrop({ accept: ItemTypes.COLUMN });
    useEffect(() => {
        if (activeProject) {
            setColumns(activeProject.groupsOrder);
        }
    }, []);
    return (
        <Wrapper>
            <DraggableSpace ref={drop}>
                {columns.map((col: { id: string; groupName: string }) => renderColumn(col, findCol, moveCol))}
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
