import React from 'react';
import styled from 'styled-components';
import { Colors, FontSize } from '../../assets/const';
import Spinner from '../common/Spinner';
import { useGetFinishedTasks } from './hooks/useGetFinishedTasks';
import ListItem from './ListItem';
interface ITask {
    taskName: string;
    id: string;
    desc: string;
}

const FinishedTasksList: React.FC = () => {
    const { finishedTasks } = useGetFinishedTasks();
    return (
        <>
            <Title>Finished tasks:</Title>
            <List>
                {finishedTasks.length ? (
                    finishedTasks.map((task: ITask) => <ListItem key={task.id} {...task} />)
                ) : (
                    <Spinner />
                )}
            </List>
        </>
    );
};
const Title = styled.h1`
    text-align: center;
    color: ${Colors.SECONDARY};
    font-size: ${FontSize.BIG_HEADER_MOBILE};
`;
const List = styled.ul`
    width: 80%;
    margin-top: 10px;
`;

export default FinishedTasksList;
