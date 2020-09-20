import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../assets/const';
import GroupItem from './GroupItem';

interface IGroupWrapper {
    id: string;
}

const GroupWrapper: React.FC<IGroupWrapper> = ({ id }) => {
    const [open, setOpen] = useState<boolean>(true);
    const handleOpenGroup = useCallback(() => {
        setOpen(!open);
    }, [open]);
    return (
        <Wrapper>
            <Controls onClick={handleOpenGroup} />
            <GroupItem open={open} id={id} />
        </Wrapper>
    );
};
const Wrapper = styled.article`
    padding: 10px 5px;
    width: 85%;
    border-radius: 5px;
    margin-bottom: 10px;
    position: relative;
`;
const Controls = styled.button`
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0;
    background-color: ${Colors.SECONDARY};
    top: 10px;
    right: 0;
`;
export default GroupWrapper;
