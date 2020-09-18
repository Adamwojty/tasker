import React from 'react';
import styled from 'styled-components';
import { Colors, FontSize } from '../../assets/const';

interface IControls {
    handleSwitch: () => void;
    addGroup: boolean;
}

const Controls: React.FC<IControls> = ({ handleSwitch, addGroup }) => {
    return (
        <Wrapper>
            <Text>Add Group</Text>
            <ToggleSwitch onClick={handleSwitch}>
                <Switch change={addGroup} />
            </ToggleSwitch>
            <Text>Add Task</Text>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ToggleSwitch = styled.button`
    position: relative;
    margin: 0px 10px;
    width: 100px;
    height: 25px;
    padding: 2px 5px;
    border-radius: 20px;
    background-color: ${Colors.QUINARY};
    outline-color: ${Colors.SECONDARY};
`;
const Switch = styled.div<{ change: boolean }>`
    transition: 0.4s ease-in-out;
    transform: ${({ change }) => (change ? 'translateX(0px)' : 'translateX(70px)')};
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${Colors.SECONDARY};
`;
const Text = styled.p`
    font-size: ${FontSize.TEXT_MOBILE};
    color: ${Colors.TERITIARY};
`;
export default Controls;
