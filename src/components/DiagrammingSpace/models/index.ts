//COLUMNS
export interface IDragColumn {
    id: string;
}
export interface IDragCol {
    type: string;
    id: string;
    originalIndex: string;
}
export interface ICol {
    isDragging: boolean;
    colID: number;
    groupID: string;
}
export interface IGroup {
    id: string;
    groupName: string;
    taskOrder: { id: string }[];
}
// TASKS
export interface IDragTask {
    colID: number;
    id: string;
    groupID: string;
    group: IGroup;
}
export interface ITask {
    taskName?: string;
    desc?: string;
}

export interface IDraggedTask {
    id: string;
    colID: number;
    type: string;
    originalIndex: number;
    groupID: string;
    taskID?: string;
    group: IGroup;
}
export interface ITaskModal {
    modalOpen: boolean;
    handleModal: () => void;
    data: { taskName?: string; desc?: string };
    group: IGroup;
    id: string;
    groupID: string;
}

export type FindTaskType = (id: string, group: IGroup) => { item: { id: string }; index: number };
