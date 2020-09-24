//COLUMNS
export interface IDragColumn {
    id: string;
    moveCol: (id: string, to: number, didDrop?: boolean) => void;
    findCol: (
        id: string,
    ) => {
        column: { id: string };
        index: number;
    };
}
export interface IDragCol {
    type: string;
    id: string;
    originalIndex: string;
}
export interface ICol {
    isDragging: boolean;
    colId: number;
    groupId: string;
}
// TASKS
export interface IDragTask {
    moveTask: (id: string, to: number, colId: string) => void;
    findTask: (
        id: string,
        colId: string,
    ) => {
        item: string;
        index: number;
    };
    colId: number;
    id: string;
    groupId: string;
}
export interface ITask {
    taskName?: string;
    desc?: string;
}

export interface IDraggedTask {
    id: string;
    colId: number;
    type: string;
}
