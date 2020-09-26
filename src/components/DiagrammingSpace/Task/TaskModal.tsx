import React, { memo } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Colors, FontSize } from '../../../assets/const';

const customStyles = {
    overlay: {
        zIndex: 10,
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        maxWidth: '600px',
        width: '80%',
        height: '400px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

interface ITaskModal {
    modalOpen: boolean;
    handleModal: () => void;
    data: { taskName?: string; desc?: string };
}

// eslint-disable-next-line react/display-name
const TaskModal: React.FC<ITaskModal> = memo(({ modalOpen, handleModal, data }) => {
    return (
        <Modal isOpen={modalOpen} onRequestClose={handleModal} style={customStyles} contentLabel="Task Modal">
            <ContentWrapper>
                <Title>{data?.taskName}</Title>
                <SubTitle>Task description:</SubTitle>
                <Text>{data?.desc}</Text>
            </ContentWrapper>
            <Close onClick={handleModal}>X</Close>
        </Modal>
    );
});

const ContentWrapper = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    color: ${Colors.TERITIARY};
`;
const Title = styled.h3`
    font-size: ${FontSize.LOGO_MOBILE};
    text-transform: capitalize;
    margin-bottom: 15px;
`;
const SubTitle = styled.p`
    font-size: ${FontSize.MID_HEADER_MOBILE};
`;
const Text = styled.p`
    font-size: ${FontSize.TEXT_MOBILE};
    ::first-letter {
        text-transform: uppercase;
    }
`;

const Close = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 5px;
    height: 30px;
    width: 30px;
    transition: 0.3s ease-in-out;
    background-color: ${Colors.SECONDARY};
    color: ${Colors.MAIN};
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 5px;
    :hover {
        color: ${Colors.MAIN};
        background-color: ${Colors.SECONDARY};
    }
`;
export default TaskModal;
