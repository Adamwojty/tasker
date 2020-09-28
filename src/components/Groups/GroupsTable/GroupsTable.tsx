import React, { useContext } from 'react';
import styled from 'styled-components';
import { Colors, FontSize } from '../../../assets/const';
import GroupWrapper from './GroupWrapper';
import Spinner from '../../common/Spinner';
import { store } from '../../../config/store';

const GroupsTable: React.FC = () => {
    const { groupsOrder } = useContext(store);

    return (
        <Wrapper>
            <Title>Groups:</Title>
            {groupsOrder ? (
                groupsOrder.map((group: { id: string }) => <GroupWrapper key={group.id} id={group.id} />)
            ) : (
                <Spinner />
            )}
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
