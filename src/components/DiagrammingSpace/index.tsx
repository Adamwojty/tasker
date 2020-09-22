import React, { useCallback, useContext, useState, useEffect } from 'react';
import update from 'immutability-helper';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { ItemTypes } from './ItemTypes';
import { store } from '../../config/store';
import { renderColumn } from './actions/renderColumn';
import { IGroups, ITask } from './models';
import { updateGroups } from './actions/updateGroups';

const DiagramingSpace: React.FC = () => {
    const { activeProject } = useContext(store);
    const [columns, setColumns] = useState<IGroups[]>([]);

    const moveCol = useCallback(
        (id: string, atIndex: number, didDrop?: boolean) => {
            const { column, index } = findCol(id);

            const newColOrder = update(columns, {
                $splice: [
                    [index, 1],
                    [atIndex, 0, column],
                ],
            });
            setColumns(newColOrder);
            if (!didDrop) {
                return updateGroups(newColOrder, activeProject?.id);
            }
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

    const [, drop] = useDrop({
        accept: ItemTypes.COLUMN,
    });

    useEffect(() => {
        if (activeProject && !columns.length) {
            setColumns(activeProject.groupsOrder);
        }
    }, [activeProject]);

    return (
        <Wrapper>
            <DraggableSpace ref={drop}>
                {columns.map((col: { id: string; groupName: string; taskOrder: ITask[] }) =>
                    renderColumn(col, findCol, moveCol),
                )}
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
