import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors, FontSize } from '../../assets/const';
import { Icon } from '../common/Icon';
import { Routes } from '../../config/Routing/Routes';

const navItems = [
    { id: 1, img: '', title: 'Table', path: Routes.TABLE },
    { id: 2, img: '', title: 'Tasks', path: Routes.TASKS },
    { id: 3, img: '', title: 'Add Group', path: Routes.ADD_GROUP },
    { id: 4, img: '', title: 'Add Task', path: Routes.TASKS_ADD },
    { id: 5, img: '', title: 'Finished Tasks', path: Routes.TASKS_FINISHED },
    { id: 6, img: '', title: 'Settings', path: Routes.SETTINGS },
];
interface INavItem {
    id: number;
    img: string;
    title: string;
    path: string;
}

const Navigation: React.FC = () => {
    return (
        <Wrapper>
            <List>
                {navItems.map((item: INavItem) => (
                    <li key={item.id}>
                        <NavItem to={item.path}>
                            <Icon />
                            {item.title}
                        </NavItem>
                    </li>
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
const NavItem = styled(Link)`
    color: ${Colors.TERITIARY};
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