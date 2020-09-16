import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontSize, FontWeight, Colors } from '../../assets/const';
import { store } from '../../config/store';
import { Icon } from '../common/Icon';

const Header: React.FC = () => {
    const { activeProject } = useContext(store);
    return (
        <Wrapper>
            <Icon />
            <div>
                <Title>{activeProject?.projectName}</Title>
                <SubTitle>{activeProject?.desc}</SubTitle>
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
