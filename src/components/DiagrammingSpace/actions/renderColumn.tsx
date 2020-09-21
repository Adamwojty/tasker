import React from 'react';
import DraggableColumn from '../Column';

export const renderColumn = (
    col: { id: string; groupName: string },
    findCol: (
        id: string,
    ) => {
        column: {
            id: string;
            groupName: string;
        };
        index: number;
    },
    moveCol: (id: string, to: number) => void,
) => {
    return <DraggableColumn key={col.id} id={col.id} text={col.groupName} moveCol={moveCol} findCol={findCol} />;
};
