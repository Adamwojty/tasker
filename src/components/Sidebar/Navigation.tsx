import * as React from 'react';
import styled from 'styled-components';
import { Colors, FontSize } from '../../assets/const';
import { Icon } from '../common/Icon';

const navItems = [
    { id: 1, img: '', title: 'Table' },
    { id: 2, img: '', title: 'Tasks' },
    { id: 3, img: '', title: 'Add Task' },
    { id: 4, img: '', title: 'Finished Tasks' },
    { id: 5, img: '', title: 'Settings' },
];
interface INavItem {
    id: number;
    img: string;
    title: string;
}

const Navigation: React.FC = () => {
    return (
        <Wrapper>
            <List>
                {navItems.map((item: INavItem) => (
                    <ListItem key={item.id}>
                        <Icon />
                        {item.title}
                    </ListItem>
                ))}
            </List>
        </Wrapper>
    );
};
const Wrapper = styled.nav`
    margin: 10px 10px;
`;
const List = styled.ul`
    list-style: none;
`;
const ListItem = styled.li`
    margin: 10px 0;
    padding: 5px 0;
    display: flex;
    align-items: center;
    font-size: ${FontSize.NAV_ITEM_MOBILE};
    :hover {
        background-color: ${Colors.NAV_HOVER};
    }
`;

export default Navigation;
