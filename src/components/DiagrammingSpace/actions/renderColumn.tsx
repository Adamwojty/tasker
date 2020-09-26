import React from 'react';
import DraggableColumn from '../Column/DraggableColumn';
import { FindColType, MoveColType } from '../models';

export const renderColumn = (colId: string, findCol: FindColType, moveCol: MoveColType) => {
    return <DraggableColumn key={colId} id={colId} moveCol={moveCol} findCol={findCol} />;
};
