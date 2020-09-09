import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors, FontWeight, FontSize } from '../../assets/const';
const Banner: React.FC = () => {
    return (
        <Wrapper>
            <Logo to="/">tracker</Logo>
            <NewProject>New Project</NewProject>
            <OptionsWrapper>
                <Settings />
                <Avatar />
            </OptionsWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    border-bottom: 2px solid ${Colors.QUATERNARY};
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`;
const Logo = styled(Link)`
    color: ${Colors.SECONDARY};
    font-weight: ${FontWeight.BOLD};
    font-size: ${FontSize.LOGO_MOBILE};
`;
const NewProject = styled.button`
    color: ${Colors.MAIN};
    background-color: ${Colors.SECONDARY};
    padding: 5px 10px;
    border-radius: 5px;
`;
const OptionsWrapper = styled.div`
    display: flex;
    width: 80px;
    justify-content: right;
`;
const Avatar = styled.div`
    margin-left: 10px;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    background-color: ${Colors.QUATERNARY};
`;
const Settings = styled.div`
    border-radius: 50%;
    height: 30px;
    width: 30px;
    background-color: ${Colors.QUATERNARY};
`;
export default Banner;
