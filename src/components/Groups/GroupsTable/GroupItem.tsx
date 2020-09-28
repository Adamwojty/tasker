import React from 'react';
import styled from 'styled-components';
import { Colors, FontSize, FontWeight } from '../../../assets/const';
import { useGroupData } from '../../common/hooks/useGroupData';
import Spinner from '../../common/Spinner';
import TaskWrapper from './TaskWrapper';

interface IGroupItemProps {
    open: boolean;
    id: string;
}

interface ITask {
    id: string;
}

const GroupItem: React.FC<IGroupItemProps> = ({ open, id }) => {
    const { group } = useGroupData(id);
    return (
        <>
            <Title>{group?.groupName}</Title>
            <ContentWrapper open={open}>
                {group ? group.taskOrder.map((task: ITask) => <TaskWrapper key={task.id} id={task.id} />) : <Spinner />}
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
