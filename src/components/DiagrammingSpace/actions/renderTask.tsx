import React from 'react';
import { FindTaskType, MoveTaskType } from '../models';
import DraggableTask from '../Task/DraggableTask';

export const renderTask = (
    task: { id: string },
    findTask: FindTaskType,
    moveTask: MoveTaskType,
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
