export type PaymentIntentStatus =
    | 'PENDING'
    | 'PROCESSING'
    | 'REQUIRES_ACTION'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'CANCELED'
    | 'REFUNDED'
    | 'PARTIALLY_REFUNDED';

export type PspProvider = 'STRIPE' | 'ADYEN' | 'CHECKOUT';

export type PaymentMethodType = 'CARD' | 'BANK_TRANSFER' | 'WALLET';

export interface PaymentMethod {
    type: PaymentMethodType;
    brand?: string; // e.g. "visa", "mastercard"
    last4?: string;
}

export interface PaymentIntent {
    id: string;
    idempotencyKey: string;
    amount: number;
    currency: string;
    status: PaymentIntentStatus;
    customerId: string;
    customerEmail: string;
    description: string;
    merchantId: string;
    merchantName: string;
    psp: PspProvider;
    pspReference: string | null;
    pspFeeAmount: number | null;
    netAmount: number | null;
    paymentMethod: PaymentMethod;
    ledgerTransactionId: string | null;
    failureCode: string | null;
    failureMessage: string | null;
    metadata: Record<string, string>;
    createdAt: string;
    updatedAt: string;
    completedAt: string | null;
}

export const MOCK_PAYMENT_INTENTS: PaymentIntent[] = [
    {
        id: 'pi_01HZX3A1B2C3D4E5F6G7H8J9K0',
        idempotencyKey: 'idem_7f3a9c2e-1b4d-4e8f-9a2b-3c5d6e7f8a9b',
        amount: 12500,
        currency: 'USD',
        status: 'SUCCEEDED',
        customerId: 'cus_01HZX10000000000000000001',
        customerEmail: 'alice.wong@example.com',
        description: 'Pro plan — annual subscription',
        merchantId: 'mer_01HZX2ACME0000000000000A',
        merchantName: 'Acme SaaS',
        psp: 'STRIPE',
        pspReference: 'pi_3NxYz2K9aBcDeFgHiJkLmNoP',
        pspFeeAmount: 393,
        netAmount: 12107,
        paymentMethod: { type: 'CARD', brand: 'visa', last4: '4242' },
        ledgerTransactionId: 'txn_01HZX3A1LGR0000000000001',
        failureCode: null,
        failureMessage: null,
        metadata: { order_id: 'ORD-2026-1001', plan: 'pro-annual' },
        createdAt: '2026-11-10T09:14:22.000Z',
        updatedAt: '2026-11-10T09:14:31.000Z',
        completedAt: '2026-11-10T09:14:31.000Z',
    },
    {
        id: 'pi_01HZX3B2C3D4E5F6G7H8J9K0L1',
        idempotencyKey: 'idem_8a4b0d3f-2c5e-4f9a-8b3c-4d6e7f8a9b0c',
        amount: 8999,
        currency: 'EUR',
        status: 'SUCCEEDED',
        customerId: 'cus_01HZX10000000000000000002',
        customerEmail: 'lukas.meyer@example.de',
        description: 'Team plan — monthly subscription',
        merchantId: 'mer_01HZX2GLOBEX000000000000B',
        merchantName: 'Globex GmbH',
        psp: 'STRIPE',
        pspReference: 'pi_3NxYz4QrStUvWxYzAbCdEfGh',
        pspFeeAmount: 271,
        netAmount: 8728,
        paymentMethod: { type: 'CARD', brand: 'mastercard', last4: '5100' },
        ledgerTransactionId: 'txn_01HZX3B2LGR0000000000002',
        failureCode: null,
        failureMessage: null,
        metadata: { order_id: 'ORD-2026-1002', plan: 'team-monthly' },
        createdAt: '2026-11-11T14:02:11.000Z',
        updatedAt: '2026-11-11T14:02:19.000Z',
        completedAt: '2026-11-11T14:02:19.000Z',
    },
    {
        id: 'pi_01HZX3C3D4E5F6G7H8J9K0L1M2',
        idempotencyKey: 'idem_9b5c1e4a-3d6f-4a0b-9c4d-5e7f8a9b0c1d',
        amount: 4500,
        currency: 'GBP',
        status: 'SUCCEEDED',
        customerId: 'cus_01HZX10000000000000000003',
        customerEmail: 'priya.shah@example.co.uk',
        description: 'API usage — October 2026',
        merchantId: 'mer_01HZX2INITECH00000000000C',
        merchantName: 'Initech Ltd',
        psp: 'ADYEN',
        pspReference: 'adyen_pay_8837462910',
        pspFeeAmount: 180,
        netAmount: 4320,
        paymentMethod: { type: 'CARD', brand: 'visa', last4: '1881' },
        ledgerTransactionId: 'txn_01HZX3C3LGR0000000000003',
        failureCode: null,
        failureMessage: null,
        metadata: { invoice_id: 'INV-2026-10-0031' },
        createdAt: '2026-11-12T07:45:03.000Z',
        updatedAt: '2026-11-12T07:45:12.000Z',
        completedAt: '2026-11-12T07:45:12.000Z',
    },
    {
        id: 'pi_01HZX3D4E5F6G7H8J9K0L1M2N3',
        idempotencyKey: 'idem_0c6d2f5b-4e7a-4b1c-8d5e-6f8a9b0c1d2e',
        amount: 25000,
        currency: 'USD',
        status: 'PROCESSING',
        customerId: 'cus_01HZX10000000000000000004',
        customerEmail: 'marco.rossi@example.it',
        description: 'Enterprise onboarding fee',
        merchantId: 'mer_01HZX2UMBRELLA0000000000D',
        merchantName: 'Umbrella Corp',
        psp: 'CHECKOUT',
        pspReference: 'pay_chk_9a8b7c6d5e4f3a2b1c',
        pspFeeAmount: null,
        netAmount: null,
        paymentMethod: { type: 'CARD', brand: 'amex', last4: '0005' },
        ledgerTransactionId: 'txn_01HZX3D4LGR0000000000004',
        failureCode: null,
        failureMessage: null,
        metadata: { order_id: 'ORD-2026-1004', tier: 'enterprise' },
        createdAt: '2026-11-13T10:30:00.000Z',
        updatedAt: '2026-11-13T10:30:02.000Z',
        completedAt: null,
    },
    {
        id: 'pi_01HZX3E5F6G7H8J9K0L1M2N3O4',
        idempotencyKey: 'idem_1d7e3a6c-5f8b-4c2d-9e6f-7a9b0c1d2e3f',
        amount: 1999,
        currency: 'USD',
        status: 'PENDING',
        customerId: 'cus_01HZX10000000000000000005',
        customerEmail: 'sam.taylor@example.com',
        description: 'Starter plan — monthly',
        merchantId: 'mer_01HZX2ACME0000000000000A',
        merchantName: 'Acme SaaS',
        psp: 'STRIPE',
        pspReference: null,
        pspFeeAmount: null,
        netAmount: null,
        paymentMethod: { type: 'WALLET', brand: 'apple_pay' },
        ledgerTransactionId: null,
        failureCode: null,
        failureMessage: null,
        metadata: { order_id: 'ORD-2026-1005', plan: 'starter-monthly' },
        createdAt: '2026-11-13T11:02:47.000Z',
        updatedAt: '2026-11-13T11:02:47.000Z',
        completedAt: null,
    },
    {
        id: 'pi_01HZX3F6G7H8J9K0L1M2N3O4P5',
        idempotencyKey: 'idem_2e8f4b7d-6a9c-4d3e-8f7a-8b0c1d2e3f4a',
        amount: 7500,
        currency: 'USD',
        status: 'REQUIRES_ACTION',
        customerId: 'cus_01HZX10000000000000000006',
        customerEmail: 'nina.patel@example.com',
        description: 'Pro plan — monthly renewal',
        merchantId: 'mer_01HZX2GLOBEX000000000000B',
        merchantName: 'Globex GmbH',
        psp: 'STRIPE',
        pspReference: 'pi_3NxYz6AbCdEfGhIjKlMnOpQr',
        pspFeeAmount: null,
        netAmount: null,
        paymentMethod: { type: 'CARD', brand: 'visa', last4: '3117' },
        ledgerTransactionId: 'txn_01HZX3F6LGR0000000000006',
        failureCode: null,
        failureMessage: null,
        metadata: { order_id: 'ORD-2026-1006', action: '3ds_authentication' },
        createdAt: '2026-11-13T10:58:12.000Z',
        updatedAt: '2026-11-13T10:58:15.000Z',
        completedAt: null,
    },
    {
        id: 'pi_01HZX3G7H8J9K0L1M2N3O4P5Q6',
        idempotencyKey: 'idem_3f9a5c8e-7b0d-4e4f-9a8b-9c1d2e3f4a5b',
        amount: 30000,
        currency: 'USD',
        status: 'FAILED',
        customerId: 'cus_01HZX10000000000000000007',
        customerEmail: 'david.lee@example.com',
        description: 'Enterprise plan — annual',
        merchantId: 'mer_01HZX2INITECH00000000000C',
        merchantName: 'Initech Ltd',
        psp: 'STRIPE',
        pspReference: 'pi_3NxYz8GhIjKlMnOpQrStUvWx',
        pspFeeAmount: null,
        netAmount: null,
        paymentMethod: { type: 'CARD', brand: 'mastercard', last4: '2720' },
        ledgerTransactionId: null,
        failureCode: 'insufficient_funds',
        failureMessage: "The customer's card has insufficient funds.",
        metadata: { order_id: 'ORD-2026-1007', plan: 'enterprise-annual' },
        createdAt: '2026-11-13T08:15:40.000Z',
        updatedAt: '2026-11-13T08:15:44.000Z',
        completedAt: '2026-11-13T08:15:44.000Z',
    },
    {
        id: 'pi_01HZX3H8J9K0L1M2N3O4P5Q6R7',
        idempotencyKey: 'idem_4a0b6d9f-8c1e-4f5a-8b9c-0d2e3f4a5b6c',
        amount: 1250,
        currency: 'EUR',
        status: 'FAILED',
        customerId: 'cus_01HZX10000000000000000008',
        customerEmail: 'anna.kowalski@example.pl',
        description: 'Add-on: extra seats',
        merchantId: 'mer_01HZX2UMBRELLA0000000000D',
        merchantName: 'Umbrella Corp',
        psp: 'ADYEN',
        pspReference: 'adyen_pay_7728193045',
        pspFeeAmount: null,
        netAmount: null,
        paymentMethod: { type: 'CARD', brand: 'visa', last4: '0004' },
        ledgerTransactionId: null,
        failureCode: 'card_declined',
        failureMessage: 'The issuer declined the card.',
        metadata: { order_id: 'ORD-2026-1008', addon: 'extra-seats' },
        createdAt: '2026-11-12T16:22:10.000Z',
        updatedAt: '2026-11-12T16:22:14.000Z',
        completedAt: '2026-11-12T16:22:14.000Z',
    },
    {
        id: 'pi_01HZX3J9K0L1M2N3O4P5Q6R7S8',
        idempotencyKey: 'idem_5b1c7e0a-9d2f-4a6b-9c0d-1e3f4a5b6c7d',
        amount: 5000,
        currency: 'USD',
        status: 'REFUNDED',
        customerId: 'cus_01HZX10000000000000000009',
        customerEmail: 'julia.garcia@example.com',
        description: 'Pro plan — duplicate charge refunded',
        merchantId: 'mer_01HZX2ACME0000000000000A',
        merchantName: 'Acme SaaS',
        psp: 'STRIPE',
        pspReference: 'pi_3NxYzAStUvWxYzAbCdEfGhIj',
        pspFeeAmount: 175,
        netAmount: 4825,
        paymentMethod: { type: 'CARD', brand: 'visa', last4: '4242' },
        ledgerTransactionId: 'txn_01HZX3J9LGR0000000000009',
        failureCode: null,
        failureMessage: null,
        metadata: { order_id: 'ORD-2026-1009', refund_reason: 'duplicate' },
        createdAt: '2026-11-09T11:00:00.000Z',
        updatedAt: '2026-11-11T15:30:00.000Z',
        completedAt: '2026-11-09T11:00:05.000Z',
    },
    {
        id: 'pi_01HZX3K0L1M2N3O4P5Q6R7S8T9',
        idempotencyKey: 'idem_6c2d8f1b-0e3a-4b7c-8d1e-2f4a5b6c7d8e',
        amount: 20000,
        currency: 'USD',
        status: 'PARTIALLY_REFUNDED',
        customerId: 'cus_01HZX10000000000000000010',
        customerEmail: 'tom.becker@example.com',
        description: 'Team plan — partial refund for downtime',
        merchantId: 'mer_01HZX2GLOBEX000000000000B',
        merchantName: 'Globex GmbH',
        psp: 'STRIPE',
        pspReference: 'pi_3NxYzCEfGhIjKlMnOpQrStUv',
        pspFeeAmount: 640,
        netAmount: 19360,
        paymentMethod: { type: 'CARD', brand: 'mastercard', last4: '5100' },
        ledgerTransactionId: 'txn_01HZX3K0LGR0000000000010',
        failureCode: null,
        failureMessage: null,
        metadata: { order_id: 'ORD-2026-1010', refunded_amount: '5000' },
        createdAt: '2026-11-10T13:30:00.000Z',
        updatedAt: '2026-11-12T09:15:00.000Z',
        completedAt: '2026-11-10T13:30:07.000Z',
    },
    {
        id: 'pi_01HZX3L1M2N3O4P5Q6R7S8T9U0',
        idempotencyKey: 'idem_7d3e9a2c-1f4b-4c8d-9e2f-3a5b6c7d8e9f',
        amount: 1500000, // ₹15,000.00 in paise
        currency: 'INR',
        status: 'SUCCEEDED',
        customerId: 'cus_01HZX10000000000000000011',
        customerEmail: 'rahul.verma@example.in',
        description: 'Annual license — bank transfer',
        merchantId: 'mer_01HZX2INITECH00000000000C',
        merchantName: 'Initech Ltd',
        psp: 'ADYEN',
        pspReference: 'adyen_pay_6612309874',
        pspFeeAmount: 18000,
        netAmount: 1482000,
        paymentMethod: { type: 'BANK_TRANSFER' },
        ledgerTransactionId: 'txn_01HZX3L1LGR0000000000011',
        failureCode: null,
        failureMessage: null,
        metadata: { order_id: 'ORD-2026-1011', settlement_window: 'T+1' },
        createdAt: '2026-11-11T05:00:00.000Z',
        updatedAt: '2026-11-11T05:00:08.000Z',
        completedAt: '2026-11-11T05:00:08.000Z',
    },
    {
        id: 'pi_01HZX3M2N3O4P5Q6R7S8T9U0V1',
        idempotencyKey: 'idem_8e4f0b3d-2a5c-4d9e-8f3a-4b6c7d8e9f0a',
        amount: 9900,
        currency: 'USD',
        status: 'CANCELED',
        customerId: 'cus_01HZX10000000000000000012',
        customerEmail: 'emma.wilson@example.com',
        description: 'Starter plan — abandoned checkout',
        merchantId: 'mer_01HZX2UMBRELLA0000000000D',
        merchantName: 'Umbrella Corp',
        psp: 'CHECKOUT',
        pspReference: null,
        pspFeeAmount: null,
        netAmount: null,
        paymentMethod: { type: 'CARD', brand: 'visa', last4: '4242' },
        ledgerTransactionId: null,
        failureCode: null,
        failureMessage: null,
        metadata: {
            order_id: 'ORD-2026-1012',
            cancel_reason: 'customer_abandoned',
        },
        createdAt: '2026-11-08T18:45:00.000Z',
        updatedAt: '2026-11-08T18:50:00.000Z',
        completedAt: '2026-11-08T18:50:00.000Z',
    },
];

export interface PaymentIntentFilters {
    status?: PaymentIntentStatus;
    merchantId?: string;
    currency?: string;
    psp?: PspProvider;
}

export function getMockPaymentIntents(
    filters: PaymentIntentFilters = {},
): PaymentIntent[] {
    return MOCK_PAYMENT_INTENTS.filter((pi) => {
        if (filters.status && pi.status !== filters.status) return false;
        if (filters.merchantId && pi.merchantId !== filters.merchantId)
            return false;
        if (filters.currency && pi.currency !== filters.currency) return false;
        if (filters.psp && pi.psp !== filters.psp) return false;
        return true;
    }).sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)); // newest first
}

export function getMockPaymentIntentById(
    id: string,
): PaymentIntent | undefined {
    return MOCK_PAYMENT_INTENTS.find((pi) => pi.id === id);
}

export function formatAmount(minorUnits: number, currency: string): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: currency === 'INR' ? 2 : 2,
    }).format(minorUnits / 100);
}
