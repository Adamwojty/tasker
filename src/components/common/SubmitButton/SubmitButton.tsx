import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../assets/const';
interface ISubmitButton {
    text: string;
    secondary?: boolean;
}
const SubmitButton: React.FC<ISubmitButton> = ({ text, secondary }) => (
    <Button secondary={secondary} type="submit">
        {text}
    </Button>
);

const Button = styled.button<{ secondary?: boolean }>`
    padding: 10px 5px;
    width: 250px;
    border-radius: 5px;
    background-color: ${({ secondary }) => (secondary ? `${Colors.MAIN}` : `${Colors.QUINARY}`)};
    color: ${Colors.TERITIARY};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
export default SubmitButton;
