import React from 'react';
import { ITask } from '../models';
import DraggableTask from '../Task/DraggableTask';

export const renderTask = (
    task: ITask,
    findTask: (
        id: string,
    ) => {
        item: {
            id: string;
            taskName: string;
        };
        index: number;
    },
    moveTask: (id: string, to: number) => void,
) => {
    return <DraggableTask {...task} key={task.id} moveTask={moveTask} findTask={findTask} />;
};
