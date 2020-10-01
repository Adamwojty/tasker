import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Colors, FontSize } from '../../../assets/const';
import { handleTaskDelete } from '../actions/handleTaskDelete';
import { ITaskModal } from '../models';
import { handleFinishTask } from '../actions/handleFinishTask';
import { store } from '../../../config/store';

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

const TaskModal: React.FC<ITaskModal> = ({ modalOpen, handleModal, data, groupID, id, group }) => {
    const { activeProject } = useContext(store);
    const deleteTask = useCallback(() => {
        return handleTaskDelete(id, groupID, group);
    }, []);
    const markAsFinished = useCallback(() => {
        return handleFinishTask(id, groupID, group, activeProject?.id);
    }, []);
    return (
        <Modal isOpen={modalOpen} onRequestClose={handleModal} style={customStyles} contentLabel="Task Modal">
            <ContentWrapper>
                <Content>
                    <Title>{data?.taskName}</Title>
                    <SubTitle>Task description:</SubTitle>
                    <Text>{data?.desc}</Text>
                </Content>
                <ButtonsWrapper>
                    <Button type="button" onClick={markAsFinished}>
                        mark as finished
                    </Button>
                    <Button type="button" onClick={deleteTask}>
                        delete task
                    </Button>
                </ButtonsWrapper>
            </ContentWrapper>
            <Close onClick={handleModal}>X</Close>
        </Modal>
    );
};
const ContentWrapper = styled.div`
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    color: ${Colors.TERITIARY};
    overflow-y: auto;
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
`;
const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Button = styled.button`
    padding: 10px 15px;
    border-radius: 5px;
    background-color: ${Colors.SECONDARY};
    color: ${Colors.MAIN};
    transition: 0.3s ease-in-out;
    margin-top: 10px;
    :hover {
        color: ${Colors.TERITIARY};
        background-color: ${Colors.QUINARY};
    }
`;
export default TaskModal;
