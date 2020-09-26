//COLUMNS
export interface IDragColumn {
    id: string;
    moveCol: MoveColType;
    findCol: FindColType;
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
    moveTask: MoveTaskType;
    findTask: FindTaskType;
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
    originalIndex: number;
    groupId: string;
    data: { id: string; desc: string; taskName: string };
}
export type MoveColType = (id: string, to: number, didDrop?: boolean) => void;
export type FindColType = (id: string) => { column: { id: string }; index: number };
export type MoveTaskType = (id: string, to: number, colId: string) => void;
export type FindTaskType = (id: string, colId: string) => { item: string; index: number };
