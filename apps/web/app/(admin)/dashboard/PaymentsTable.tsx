'use client';

import React, { useEffect, useState } from 'react';
import { formatAmount, type PaymentIntent } from './mockData.ts';

const PaymentsTable = ({
    payments: initialPayments,
}: {
    payments: PaymentIntent[];
}) => {
    const [payments, setPayments] = useState(initialPayments);

    useEffect(() => {
        const statusEvent = new EventSource('/api/sse/payment-status');

        statusEvent.onopen = () => {
            console.log('connection open');
        };

        statusEvent.onmessage = (event: MessageEvent) => {
            const { paymentId, status } = JSON.parse(event.data);
            setPayments((prevPayments) =>
                prevPayments.map((payment) =>
                    payment.id === paymentId
                        ? {
                              // todo: find the eslint rule and fix this indentation issue
                              ...payment,
                              status: status,
                          }
                        : payment,
                ),
            );
        };

        statusEvent.onerror = () => {
            console.log('sse error');
        };
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>PSP</th>
                    <th>Customer</th>
                </tr>
            </thead>
            <tbody>
                {payments.map((p) => (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{formatAmount(p.amount, p.currency)}</td>
                        <td>{p.status}</td>
                        <td>{p.psp}</td>
                        <td>{p.customerEmail}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PaymentsTable;
