import type { NextRequest } from 'next/server';
import { paymentStatusChanged } from '../../sse/payment-status/payment-status-service.ts';

export async function POST(req: NextRequest) {
    console.log(await req.json());

    paymentStatusChanged('pi_01HZX3F6G7H8J9K0L1M2N3O4P5');

    return Response.json({ status: 200 });
}
