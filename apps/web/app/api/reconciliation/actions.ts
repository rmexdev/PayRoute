const BREAKS = [
    {
        id: 4,
        name: 'four',
    },
    {
        id: 3,
        name: 'three',
    },
    {
        id: 1,
        name: 'one',
    },
];

export const getByBreakId = (breakId: number) => {
    return BREAKS.filter((b) => b.id === breakId)?.at(0) || null;
};
