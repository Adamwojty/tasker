import React from 'react';
import styled from 'styled-components';
import { FontSize, FontWeight, Colors } from '../../assets/const';
import { Icon } from '../common/Icon';
const PROJECT_INFO = {
    title: 'tasker',
    subTitle: 'Projekt oprogramowania nowej generacji',
};
const Header: React.FC = () => {
    return (
        <Wrapper>
            <Icon />
            <div>
                <Title>{PROJECT_INFO.title}</Title>
                <SubTitle>{PROJECT_INFO.subTitle}</SubTitle>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.header`
    margin-left: 10px;
    padding: 60px 0 50px;
    align-items: center;
    display: flex;
    color: ${Colors.TERITIARY};
`;
const Title = styled.h2`
    font-weight: ${FontWeight.REGULAR};
    font-size: ${FontSize.HEADER_MOBILE};
`;
const SubTitle = styled.p`
    font-size: ${FontSize.SUB_HEADER_MOBILE};
`;

export default Header;
