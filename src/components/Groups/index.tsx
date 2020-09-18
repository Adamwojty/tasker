import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import GroupsTable from './GroupsTable';
import AddGroup from './AddGroup';
import Controls from './Controls';
import AddTask from './AddTask';

const Groups: React.FC = () => {
    const [addGroup, setAddGroup] = useState<boolean>(false);
    const handleSwitch = useCallback(() => {
        return setAddGroup(!addGroup);
    }, [addGroup]);
    return (
        <Wrapper>
            <Controls handleSwitch={handleSwitch} addGroup={addGroup} />
            {addGroup ? <AddGroup /> : <AddTask />}
            <GroupsTable />
        </Wrapper>
    );
};
const Wrapper = styled.main`
    margin-top: 50px;
    width: 100%;
    padding-left: 20px;
`;

export default Groups;
