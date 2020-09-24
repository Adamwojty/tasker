import React from 'react';
import DraggableTask from '../Task/DraggableTask';

export const renderTask = (
    task: { id: string },
    findTask: (
        id: string,
        colId: string,
    ) => {
        item: any;
        index: number;
    },
    moveTask: (id: string, to: number, colId: string) => void,
    colId: number,
    groupId: string,
) => {
    return (
        <DraggableTask
            id={task.id}
            key={task.id}
            moveTask={moveTask}
            findTask={findTask}
            colId={colId}
            groupId={groupId}
        />
    );
};
