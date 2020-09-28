import React from 'react';
import styled from 'styled-components';
import { Colors, FontSize } from '../../assets/const';

interface IListItem {
    taskName: string;
    desc: string;
    id: string;
}

const ListItem: React.FC<IListItem> = ({ taskName, desc }) => {
    return (
        <Wrapper>
            <Title>{taskName}</Title>
            <Desc>{desc}</Desc>
        </Wrapper>
    );
};
const Wrapper = styled.li`
    list-style: none;
    background-color: ${Colors.QUINARY};
    color: ${Colors.TERITIARY};
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin-bottom: 10px;
`;
const Title = styled.h3`
    font-size: ${FontSize.MID_HEADER_MOBILE};
    margin-bottom: 5px;
`;
const Desc = styled.p`
    font-size: ${FontSize.TEXT_MOBILE};
`;
export default ListItem;
