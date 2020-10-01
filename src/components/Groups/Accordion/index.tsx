import React, { useContext } from 'react';
import styled from 'styled-components';
import { store } from '../../../config/store';
import AccordionItem from './AccordionItem';

const Accordion: React.FC = () => {
    const { groupsOrder } = useContext(store);
    return (
        <Wrapper>
            {groupsOrder.map((group: { id: string }, index) => (
                <AccordionItem key={group.id} index={index} groupID={group.id} />
            ))}
        </Wrapper>
    );
};
const Wrapper = styled.article`
    margin: 20px auto;
    padding: 10px 5px;
    width: 85%;
    border-radius: 5px;
    margin-bottom: 10px;
    position: relative;
`;

export default Accordion;
