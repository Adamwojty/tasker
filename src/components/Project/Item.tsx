import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Colors, FontSize } from '../../assets/const';
import CopyIcon from '../../assets/img/icons/copy.svg';
import { Icon } from '../common/Icon';
interface IItem {
    handleActiveProject: () => void;
    projectName: string;
    desc: string;
    active: boolean;
    id: string;
}

const Item: React.FC<IItem> = ({ handleActiveProject, projectName, desc, active, id }) => {
    const [success, setSuccess] = useState<boolean>(false);
    const text = success ? 'copied' : `Copy project id to invite people: ${id}`;
    const handleSuccess = useCallback(() => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 2000);
    }, []);

    return (
        <Wrapper onClick={handleActiveProject} active={active}>
            <Title>{projectName}</Title>
            <Desc>{desc}</Desc>
            <CopyInterface>
                <TextToCopy>{text}</TextToCopy>
                <CopyToClipboard text={id} onCopy={handleSuccess}>
                    <StyledIcon url={CopyIcon} />
                </CopyToClipboard>
            </CopyInterface>
        </Wrapper>
    );
};
const Wrapper = styled.div<{ active: boolean }>`
    position: relative;
    cursor: pointer;
    display: block;
    width: 80%;
    min-height: 100px;
    padding: 10px;
    border-radius: 5px;
    background-color: ${Colors.QUINARY};
    color: ${Colors.TERITIARY};
    transition: 0.2s ease-in-out;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin-bottom: 20px;
    border: ${({ active }) => (active ? `2px solid ${Colors.SECONDARY}` : 'none')};
    :hover {
        background-color: ${Colors.SECONDARY};
        color: ${Colors.MAIN};
        border: ${({ active }) => (active ? `2px solid ${Colors.TERITIARY}` : 'none')};
    }
`;
const Title = styled.h3`
    font-size: ${FontSize.MID_HEADER_MOBILE};
    margin-bottom: 5px;
`;
const Desc = styled.p`
    font-size: ${FontSize.TEXT_MOBILE};
`;
const CopyInterface = styled.div`
    /* position: absolute;
    top: 10px;
    right: 10px; */
    margin-top: 10px;
    cursor: pointer;
    font-size: ${FontSize.TEXT_MOBILE};
    display: flex;
    align-items: center;
`;
const TextToCopy = styled.p`
    border-radius: 5px;
`;
const StyledIcon = styled(Icon)`
    margin-left: 5px;
    :hover {
        background-color: ${Colors.QUINARY};
    }
`;
export default Item;
