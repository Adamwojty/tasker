import React, { useState } from 'react';
import update from 'immutability-helper';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { ItemTypes } from './ItemTypes';
import DraggableColumn from './Column';
const COLUMN = [
    {
        id: 1,
        text: 'Write a cool JS library',
    },
    {
        id: 2,
        text: 'Make it generic enough',
    },
    {
        id: 3,
        text: 'Write README',
    },
    {
        id: 4,
        text: 'Write a cool JS library',
    },
];

const DiagramingSpace: React.FC = () => {
    const [columns, setColumns] = useState(COLUMN);
    const moveCol = (id: number, atIndex: number) => {
        const { column, index } = findCol(id);
        setColumns(
            update(columns, {
                $splice: [
                    [index, 1],
                    [atIndex, 0, column],
                ],
            }),
        );
    };

    const findCol = (id: number) => {
        const column = columns.filter((c) => c.id === id)[0];
        return {
            column,
            index: columns.indexOf(column),
        };
    };

    const renderColumn = (col: { id: number; text: string }) => {
        return <DraggableColumn key={col.id} id={col.id} text={col.text} moveCol={moveCol} findCol={findCol} />;
    };
    const [, drop] = useDrop({ accept: ItemTypes.COLUMN });

    return (
        <Wrapper>
            <DraggableSpace ref={drop}>
                {columns.map((col: { id: number; text: string }) => renderColumn(col))}
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
