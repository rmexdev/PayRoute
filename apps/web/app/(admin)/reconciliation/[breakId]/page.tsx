import { getByBreakId } from '@/app/api/reconciliation/actions.ts';
import React from 'react';

type ReconciliationBreakProps = { params: Promise<{ breakId: string }> };

const ReconciliationBreak = async ({ params }: ReconciliationBreakProps) => {
    const { breakId: breakIdParam } = await params;
    const breakId = parseInt(breakIdParam, 10);

    const brea = getByBreakId(breakId);
    console.log(brea);

    return <p>{brea && brea.name}</p>;
};

export default ReconciliationBreak;
