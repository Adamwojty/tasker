import React from 'react';
import styled from 'styled-components';

import { useTasksData } from '../../common/hooks/useTasksData';
import AccordionTask from './AccordionTask';
interface IAccordionContents {
    isOpen: boolean;
    taskID: string;
}

const AccordionContents: React.FC<IAccordionContents> = ({ isOpen, taskID }) => {
    const { data } = useTasksData(taskID);

    return (
        <PoseAccordionContents isOpen={isOpen}>
            {data && data ? <AccordionTask taskName={data.taskName} desc={data.desc} /> : null}
        </PoseAccordionContents>
    );
};
const PoseAccordionContents = styled.div<{ isOpen: boolean }>`
    overflow-y: hidden;
    text-align: justify;
    transition: 0.2s ease-out;
    max-height: ${({ isOpen }) => (isOpen ? '200px' : '0px')};
    border-radius: 5px;
`;
export default AccordionContents;
