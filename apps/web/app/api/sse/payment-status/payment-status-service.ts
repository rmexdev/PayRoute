import {
    MOCK_PAYMENT_INTENTS,
    type PaymentIntent,
} from '@/app/(admin)/dashboard/mockData.ts';

const listeners: Set<(paymentId, paymentStatus) => void> = new Set();

export const paymentStatusChanged = (paymentId: string) => {
    const payment: PaymentIntent | undefined = MOCK_PAYMENT_INTENTS.filter(
        (p) => p.id === paymentId,
    ).at(0);
    if (payment) {
        const paymentStatus = 'SUCCEEDED';
        listeners.forEach((l) => l(paymentId, paymentStatus));
    }
};

export const subToPaymentStatus = (cb: (paymentId, paymentStatus) => void) => {
    listeners.add(cb);

    return () => listeners.clear();
};
