import React, { useCallback } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useHistory } from 'react-router';
import { Routes } from '../../config/Routing/Routes';
import { Colors, FontSize } from '../../assets/const';
import ReactModal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
interface ILogOutModal {
    modalOpen: boolean;
    handleModal: () => void;
}

ReactModal.setAppElement('#root');

const LogoutModal: React.FC<ILogOutModal> = ({ modalOpen, handleModal }) => {
    const history = useHistory();
    const handleLogout = useCallback(() => {
        localStorage.removeItem('uid');
        return history.push(Routes.MAIN);
    }, []);
    return (
        <Modal isOpen={modalOpen} onRequestClose={handleModal} style={customStyles} contentLabel="Example Modal">
            <Title>Are you sure you want to logout?</Title>
            <ButtonWrapper>
                <Button onClick={handleLogout}>log out</Button>
                <Button onClick={handleModal}>stay</Button>
            </ButtonWrapper>
        </Modal>
    );
};

const ButtonWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-evenly;
`;
const Title = styled.h3`
    color: ${Colors.TERITIARY};
    font-size: ${FontSize.HEADER_MOBILE};
    text-align: center;
`;
const Button = styled.button`
    color: ${Colors.TERITIARY};
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
    background-color: ${Colors.QUINARY};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    :hover {
        color: ${Colors.MAIN};
        background-color: ${Colors.SECONDARY};
    }
`;
export default LogoutModal;
