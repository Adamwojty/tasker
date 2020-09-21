//drag/drop
export interface IDragColumn {
    id: string;
    text: string;
    moveCol: (id: string, to: number) => void;
    findCol: (
        id: string,
    ) => {
        column: {
            id: string;
            groupName: string;
        };
        index: number;
    };
}
export interface IDragCol {
    type: string;
    id: string;
    originalIndex: string;
}
export interface ICol {
    text: string;
    isDragging: boolean;
}

// other
interface ITask {
    taskName: string;
    id: string;
    desc: string;
}

export interface IGroups {
    id: string;
    groupName: string;
    taskOrder: ITask[];
}
