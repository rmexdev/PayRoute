import { Module } from '@nestjs/common';
import { AppController } from './app.controller.ts';
import { AppService } from './app.service.ts';
import { PaymentIntentController } from './payment-intent/payment-intent.controller.ts';

@Module({
    imports: [],
    controllers: [AppController, PaymentIntentController],
    providers: [AppService],
})
export class AppModule {}
