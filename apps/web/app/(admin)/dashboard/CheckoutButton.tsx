'use client';

import { createPaymentIntent } from '@/app/api/payment-intent/actions';
import React, { useRef } from 'react';

const CheckoutButton = () => {
    const keyRef = useRef(crypto.randomUUID());

    const handleCreatePaymentIntent = async () => {
        const resp = await createPaymentIntent(keyRef.current);
        if (resp) {
            keyRef.current = crypto.randomUUID();
        }
    };

    return (
        <button onClick={handleCreatePaymentIntent}>
            Create test Payment Intent
        </button>
    );
};

export default CheckoutButton;
