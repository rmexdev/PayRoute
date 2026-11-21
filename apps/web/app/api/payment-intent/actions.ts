'use server';

import { BASE_URL } from '@/app/shared/constants.ts';

export async function createPaymentIntent(formData: FormData) {
    const idempotentKey = formData.get('idempotentKey') as string;

    const resp: Response = await fetch(`${BASE_URL}/api/payment-intent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Idempotency-Key': idempotentKey || '',
        },
    });
    console.log(await resp.json());
}
