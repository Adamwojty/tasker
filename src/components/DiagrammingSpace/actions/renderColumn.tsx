import React from 'react';
import DraggableColumn from '../Column/DraggableColumn';
import { ITask } from '../models';

export const renderColumn = (
    col: { id: string; groupName: string; taskOrder: ITask[] },
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
    return (
        <DraggableColumn
            key={col.id}
            id={col.id}
            text={col.groupName}
            moveCol={moveCol}
            findCol={findCol}
            tasks={col.taskOrder}
        />
    );
};
