import { Module } from '@nestjs/common';
import { PaymentIntentController } from './payment-intent.controller.ts';

@Module({
    imports: [],
    controllers: [PaymentIntentController],
    providers: [],
})
export class PaymentIntentModule {}
