export interface IDragColumn {
    id: number;
    text: string;
    moveCol: (id: number, to: number) => void;
    findCol: (id: number) => { index: number };
}
export interface IDragCol {
    type: string;
    id: number;
    originalIndex: number;
}
export interface ICol {
    text: string;
    isDragging: boolean;
}
