import React from 'react';
import DraggableColumn from '../Column/DraggableColumn';

export const renderColumn = (
    colId: string,
    findCol: (
        id: string,
    ) => {
        column: { id: string };
        index: number;
    },
    moveCol: (id: string, to: number) => void,
) => {
    return <DraggableColumn key={colId} id={colId} moveCol={moveCol} findCol={findCol} />;
};
