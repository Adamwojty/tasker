import React, { useState } from 'react';
import styled from 'styled-components';
import AddGroup from './AddGroup';
import Controls from './Controls';
import AddTask from './AddTask';
import Accordion from './Accordion';

const Groups: React.FC = () => {
    const [addGroup, setAddGroup] = useState<boolean>(true);
    return (
        <Wrapper>
            <Controls setAddGroup={setAddGroup} addGroup={addGroup} />
            {addGroup ? <AddGroup /> : <AddTask />}
            <Accordion />
        </Wrapper>
    );
};
const Wrapper = styled.main`
    margin-top: 50px;
    width: 100%;
    padding-left: 20px;
`;

export default Groups;
