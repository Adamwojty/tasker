import React from 'react';
import styled from 'styled-components';
import { Colors, FontSize, FontWeight } from '../../../assets/const';
import { useGroupsData } from '../hooks/useGroupsData';
import Task from './Task';

interface IGroupItemProps {
    open: boolean;
    id: string;
}

interface ITask {
    taskName: string;
    id: string;
    desc: string;
}

const GroupItem: React.FC<IGroupItemProps> = ({ open, id }) => {
    const { group } = useGroupsData(id);
    return (
        <>
            <Title>{group?.groupName}</Title>
            <ContentWrapper open={open}>
                {group?.taskOrder.map((task: ITask) => (
                    <Task key={task.id} title={task.taskName} desc={task.desc} />
                ))}
            </ContentWrapper>
        </>
    );
};

const Title = styled.h3`
    z-index: 2;
    border-bottom: 1px solid ${Colors.QUINARY};
    padding-bottom: 5px;
    margin-bottom: 5px;
    font-size: ${FontSize.MID_HEADER_MOBILE};
    font-weight: ${FontWeight.REGULAR};
`;
const ContentWrapper = styled.div<{ open: boolean }>`
    display: ${({ open }) => (open ? 'block' : 'none')};
`;

export default GroupItem;
