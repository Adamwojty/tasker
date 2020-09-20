export interface IDragColumn {
    id: string;
    text: string;
    moveCol: (id: string, to?: number) => void;
    findCol: (
        id: string,
    ) => {
        column?: {
            id?: string;
            groupName?: string;
        };
        index?: number;
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
