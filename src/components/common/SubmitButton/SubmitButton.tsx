import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../assets/const';
interface ISubmitButton {
    text: string;
}
const SubmitButton: React.FC<ISubmitButton> = ({ text }) => <Button type="submit">{text}</Button>;

const Button = styled.button`
    padding: 10px 5px;
    width: 250px;
    border-radius: 5px;
    background-color: ${Colors.QUINARY};
    color: ${Colors.TERITIARY};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
export default SubmitButton;
