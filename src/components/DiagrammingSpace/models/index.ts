//drag/drop
export interface IDragColumn {
    id: string;
    text: string;
    moveCol: (id: string, to: number, didDrop?: boolean) => void;
    findCol: (
        id: string,
    ) => {
        column: {
            id: string;
            groupName: string;
        };
        index: number;
    };
    tasks: {
        taskName: string;
        id: string;
        desc: string;
    }[];
}
export interface IDragCol {
    type: string;
    id: string;
    originalIndex: string;
}
export interface ICol {
    text: string;
    isDragging: boolean;
    tasks: ITask[];
}

// other
export interface IDragTask extends ITask {
    moveTask: (id: string, to: number) => void;
    findTask: (
        id: string,
    ) => {
        item: {
            id: string;
            taskName: string;
        };
        index: number;
    };
}
export interface ITask {
    taskName: string;
    id: string;
    desc: string;
}

export interface IGroups {
    id: string;
    groupName: string;
    taskOrder: ITask[];
}
