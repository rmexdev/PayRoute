'use server';

import { BASE_URL } from '@/app/shared/constants.ts';

export async function createPaymentIntent(idempotentKey: string) {
    const resp: Response = await fetch(`${BASE_URL}/api/payment-intent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Idempotency-Key': idempotentKey || '',
        },
    });
    const data = await resp.json();
    console.log(data);
    return data;
}
