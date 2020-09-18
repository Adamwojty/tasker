import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../../assets/const';

interface IInput {
    label: string;
    name: string;
    field: any;
    placeholder: string;
    error: string;
    value: string;
    type?: string;
}

const Input: React.FC<IInput> = ({ field, name, error, placeholder, value, type }) => {
    return (
        <Wrapper>
            {error ? <Error>{error}</Error> : null}
            <Field placeholder={placeholder} error={error} name={name} value={value} type={type} {...field} />
        </Wrapper>
    );
};
const Wrapper = styled.div`
    position: relative;
    margin-bottom: 15px;
`;
const Field = styled.input<{ error: string }>`
    width: 250px;
    padding: 10px 5px;
    border-radius: 5px;
    border: ${({ error }) => (error ? `1px solid ${Colors.ERROR}` : `1px solid ${Colors.SECONDARY}`)};
`;
const Error = styled.p`
    position: absolute;
    top: -15px;
    right: 0;
    font-size: 10px;
    color: ${Colors.ERROR};
`;
export default Input;
