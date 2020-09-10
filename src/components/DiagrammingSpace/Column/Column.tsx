import React from 'react';
import styled from 'styled-components';
import { Colors, FontSize, FontWeight } from '../../../assets/const';
import { ICol } from '../models';

const Column: React.FC<ICol> = ({ text, isDragging }) => {
    return (
        <>
            <Title isDragging={isDragging}>{text}</Title>
            <Col />
        </>
    );
};
const Col = styled.div`
    border-radius: 5px;
    width: 250px;
    min-height: 600px;
    background-color: ${Colors.QUINARY};
`;
const Title = styled.div<{ isDragging: boolean }>`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    font-size: ${FontSize.HEADER_MOBILE};
    font-weight: ${FontWeight.REGULAR};
    text-align: center;
    background-color: ${({ isDragging }) => (isDragging ? Colors.SECONDARY : Colors.QUINARY)};
    color: ${({ isDragging }) => (isDragging ? Colors.MAIN : Colors.TERITIARY)};
    margin-bottom: 10px;
    padding-top: 10px;
    height: 80px;
`;
export default Column;
