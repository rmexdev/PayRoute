import { getMockPaymentIntents, formatAmount } from './mockData.ts';
import CheckoutButton from './CheckoutButton.tsx';

export default function DashboardPage() {
    const payments = getMockPaymentIntents();

    return (
        <div>
            <CheckoutButton />
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
        </div>
    );
}
