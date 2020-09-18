import React from 'react';
import styled from 'styled-components';
import { Colors, FontSize } from '../../../assets/const';
import GroupWrapper from './GroupWrapper';
import { useGroupsData } from '../hooks/useGroupsData';

interface IGroup {
    groupName: string;
    id: string;
}

const GroupsTable: React.FC = () => {
    const { data } = useGroupsData();
    return (
        <Wrapper>
            <Title>Groups:</Title>
            {data.map((group: IGroup) => (
                <GroupWrapper key={group.id} {...group} />
            ))}
        </Wrapper>
    );
};
const Wrapper = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${Colors.TERITIARY};
`;
const Title = styled.h3`
    font-size: ${FontSize.MID_HEADER_MOBILE};
    margin-bottom: 10px;
`;
export default GroupsTable;
