import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Colors, FontSize } from '../../assets/const';

interface IControls {
    setAddGroup: (arg: boolean) => void;
    addGroup: boolean;
}

const Controls: React.FC<IControls> = ({ setAddGroup, addGroup }) => {
    const handleSwitch = useCallback(() => {
        return setAddGroup(!addGroup);
    }, [addGroup]);
    const handleTextClick = useCallback((value: boolean) => {
        return setAddGroup(value);
    }, []);
    return (
        <Wrapper>
            <Text onClick={() => handleTextClick(true)}>Add Group</Text>
            <ToggleSwitch onClick={handleSwitch}>
                <Switch change={addGroup} />
            </ToggleSwitch>
            <Text onClick={() => handleTextClick(false)}>Add Task</Text>
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
`;
const Switch = styled.div<{ change: boolean }>`
    transition: 0.4s ease-in-out;
    transform: ${({ change }) => (change ? 'translateX(0px)' : 'translateX(70px)')};
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${Colors.SECONDARY};
`;
const Text = styled.button`
    font-size: ${FontSize.TEXT_MOBILE};
    color: ${Colors.TERITIARY};
    padding: 2px 10px;
    border-radius: 5px;
    background-color: ${Colors.QUINARY};
`;
export default Controls;
