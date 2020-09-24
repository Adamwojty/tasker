import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import GroupItem from './GroupItem';
import ToggleIcon from '../../../assets/img/icons/toggle.svg';
interface IGroupWrapper {
    id: string;
}

const GroupWrapper: React.FC<IGroupWrapper> = ({ id }) => {
    const [open, setOpen] = useState<boolean>(true);
    const handleOpenGroup = useCallback(() => {
        return setOpen(!open);
    }, [open]);
    return (
        <Wrapper>
            <Controls onClick={handleOpenGroup} url={ToggleIcon} open={open} />
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
const Controls = styled.button<{ url: string; open: boolean }>`
    background-image: ${({ url }) => `url(${url})`};
    background-position: center;
    background-repeat: no-repeat;
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
    position: absolute;
    width: 25px;
    height: 25px;
    border: 0;
    top: 10px;
    right: 5px;
`;
export default GroupWrapper;
