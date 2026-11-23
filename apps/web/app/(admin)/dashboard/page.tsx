import { getMockPaymentIntents } from './mockData.ts';
import CheckoutButton from './CheckoutButton.tsx';
import PaymentsTable from './PaymentsTable.tsx';

export default function DashboardPage() {
    const payments = getMockPaymentIntents();

    return (
        <div>
            <CheckoutButton />
            <PaymentsTable payments={payments} />
        </div>
    );
}
