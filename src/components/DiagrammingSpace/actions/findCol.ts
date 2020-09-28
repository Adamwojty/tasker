export const findCol = (id: string, groupsOrder: { id: string }[]) => {
    const column = groupsOrder.filter((c: { id: string }) => `${c.id}` === id)[0];
    const index = groupsOrder.indexOf(column);
    return {
        column,
        index,
    };
};
