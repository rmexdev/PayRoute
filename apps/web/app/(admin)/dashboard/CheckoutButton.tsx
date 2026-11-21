'use client';

import { createPaymentIntent } from '@/app/api/payment-intent/actions';
import React, { useRef } from 'react';

const CheckoutButton = () => {
    const key = useRef(crypto.randomUUID()).current;

    return (
        <form action={createPaymentIntent}>
            <input
                type="text"
                name="idempotentKey"
                hidden
                readOnly
                value={key}
            />
            <button>Create test Payment Intent</button>
        </form>
    );
};

export default CheckoutButton;
