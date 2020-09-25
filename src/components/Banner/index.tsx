import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors, FontWeight, FontSize } from '../../assets/const';
import { Routes } from '../../config/Routing/Routes';
import ExitIcon from '../../assets/img/icons/exit.svg';
import SettingsIcon from '../../assets/img/icons/settings.svg';
import LogoutModal from './LogoutModal';

const Banner: React.FC = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleModal = useCallback(() => {
        return setModalOpen(!modalOpen);
    }, [modalOpen]);
    return (
        <Wrapper>
            <Logo to={Routes.TABLE}>tasker</Logo>
            <OptionsWrapper>
                <NewProject to={Routes.NEW_PROJECT}>Projects</NewProject>
                <Settings url={SettingsIcon} />
                <Exit url={ExitIcon} onClick={handleModal} type="button" />
                <LogoutModal modalOpen={modalOpen} handleModal={handleModal} />
            </OptionsWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 2px solid ${Colors.QUATERNARY};
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    z-index: 3;
    background-color: white;
`;
const Logo = styled(Link)`
    color: ${Colors.SECONDARY};
    font-weight: ${FontWeight.BOLD};
    font-size: ${FontSize.LOGO_MOBILE};
`;
const NewProject = styled(Link)`
    color: ${Colors.MAIN};
    background-color: ${Colors.SECONDARY};
    padding: 5px 10px;
    border-radius: 5px;
`;
const OptionsWrapper = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-between;
`;
const Exit = styled.button<{ url: string }>`
    cursor: pointer;
    background-image: ${({ url }) => `url(${url})`};
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5px;
    height: 30px;
    width: 30px;
    background-color: ${Colors.QUATERNARY};
`;
const Settings = styled.div<{ url: string }>`
    background-image: ${({ url }) => `url(${url})`};
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 5px;
    height: 30px;
    width: 30px;
    background-color: ${Colors.QUATERNARY};
`;
export default Banner;
