import styled from 'styled-components';

export const Icon = styled.div<{ url: string }>`
    background-image: ${({ url }) => `url(${url})`};
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 10px;
    border-radius: 5px;
    height: 30px;
    width: 30px;
    background-color: transparent;
`;
