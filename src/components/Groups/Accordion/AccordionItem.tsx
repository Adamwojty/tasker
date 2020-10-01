import React from 'react';
import styled from 'styled-components';
import { useAccordion } from '../hooks/useAccordion';
import ToggleIcon from '../../../assets/img/icons/toggle.svg';

import { useGroupData } from '../../common/hooks/useGroupData';
import Spinner from '../../common/Spinner';
import AccordionContents from './AccordionContents';
import { Colors, FontSize, FontWeight } from '../../../assets/const';
interface IAccordionItem {
    index: number;
    groupID: string;
}

const AccordionItem: React.FC<IAccordionItem> = ({ index, groupID }) => {
    const { openIndexes, toggleIndex } = useAccordion();
    const { group } = useGroupData(groupID);
    const isOpen = openIndexes.includes(index);
    return (
        <Wrapper>
            <AccordionButton isOpen={isOpen} onClick={() => toggleIndex(index)}>
                {group?.groupName} <Icon isOpen={isOpen} url={ToggleIcon} />
            </AccordionButton>
            {group ? (
                group.taskOrder.map((task: { id: string }) => (
                    <AccordionContents key={task.id} taskID={task.id} isOpen={isOpen} />
                ))
            ) : (
                <Spinner />
            )}
        </Wrapper>
    );
};
const Wrapper = styled.div`
    display: grid;
    grid-template: auto auto;
    grid-gap: 4;
    grid-auto-flow: row;
`;
const AccordionButton = styled.button<{ isOpen: boolean }>`
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid ${Colors.QUINARY};
    padding-bottom: 5px;
    margin-bottom: 5px;
    font-size: ${FontSize.MID_HEADER_MOBILE};
    font-weight: ${FontWeight.REGULAR};
    position: relative;
    height: 40px;
    outline: 0;
    text-align: left;
`;
const Icon = styled.span<{ isOpen: boolean; url: string }>`
    position: absolute;
    top: 0px;
    right: 20px;
    display: block;
    width: 40px;
    height: 40px;
    background-image: ${({ url }) => `url(${url})`};
    background-position: center;
    background-repeat: no-repeat;

    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export default AccordionItem;
