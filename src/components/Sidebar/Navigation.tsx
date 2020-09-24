import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors, FontSize } from '../../assets/const';
import { Icon } from '../common/Icon';
import { Routes } from '../../config/Routing/Routes';
import TableIcon from '../../assets/img/icons/table.svg';
import TasksIcon from '../../assets/img/icons/tasks.svg';
import FinishedIcon from '../../assets/img/icons/finished.svg';
import SettingsIcon from '../../assets/img/icons/settings.svg';

const navItems = [
    { id: 1, img: TableIcon, title: 'Table', path: Routes.TABLE },
    { id: 2, img: TasksIcon, title: 'Groups/Tasks', path: Routes.GROUPS },
    { id: 3, img: FinishedIcon, title: 'Finished Tasks', path: Routes.TASKS_FINISHED },
    { id: 4, img: SettingsIcon, title: 'Settings', path: Routes.SETTINGS },
];
interface INavItem {
    id: number;
    img: string;
    title: string;
    path: string;
}
interface INav {
    handleOpenNav: () => void;
}

const Navigation: React.FC<INav> = ({ handleOpenNav }) => {
    return (
        <Wrapper>
            <List>
                {navItems.map((item: INavItem) => (
                    <li key={item.id} onClick={handleOpenNav}>
                        <NavItem to={item.path}>
                            <Icon url={item.img} />
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
