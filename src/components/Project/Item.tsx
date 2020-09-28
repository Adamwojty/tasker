import React from 'react';
import styled from 'styled-components';
import { Colors, FontSize } from '../../assets/const';

interface IItem {
    handleActiveProject: () => void;
    projectName: string;
    desc: string;
    active: boolean;
}

const Item: React.FC<IItem> = ({ handleActiveProject, projectName, desc, active }) => {
    return (
        <Wrapper onClick={handleActiveProject} active={active}>
            <Title>{projectName}</Title>
            <Desc>{desc}</Desc>
        </Wrapper>
    );
};
const Wrapper = styled.div<{ active: boolean }>`
    cursor: pointer;
    display: block;
    width: 80%;
    min-height: 100px;
    padding: 10px;
    border-radius: 5px;
    background-color: ${Colors.QUINARY};
    color: ${Colors.TERITIARY};
    transition: 0.2s ease-in-out;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin-bottom: 20px;
    border: ${({ active }) => (active ? `2px solid ${Colors.SECONDARY}` : 'none')};
    :hover {
        background-color: ${Colors.SECONDARY};
        color: ${Colors.MAIN};
        border: ${({ active }) => (active ? `2px solid ${Colors.TERITIARY}` : 'none')};
    }
`;
const Title = styled.h3`
    font-size: ${FontSize.MID_HEADER_MOBILE};
    margin-bottom: 5px;
`;
const Desc = styled.p`
    font-size: ${FontSize.TEXT_MOBILE};
`;
export default Item;
