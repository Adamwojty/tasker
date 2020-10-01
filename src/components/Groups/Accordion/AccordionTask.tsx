import React from 'react';
import styled from 'styled-components';
import { Colors, FontSize } from '../../../assets/const';

interface ITask {
    taskName: string;
    desc: string;
}

const AccordionTask: React.FC<ITask> = ({ taskName, desc }) => {
    return (
        <Wrapper>
            <Title>{taskName}</Title>
            <p>{desc}</p>
        </Wrapper>
    );
};
const Title = styled.h4`
    font-size: ${FontSize.TEXT_MOBILE};
`;
const Wrapper = styled.div`
    padding: 5px;
    margin-bottom: 10px;
    background-color: ${Colors.QUINARY};
`;
export default AccordionTask;
