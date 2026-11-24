import { Controller, Post, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('payment-intent')
export class PaymentIntentController {
    @Post()
    create(@Req() req: Request) {
        const key = req.header('idempotency-key');

        return { resp: key };
    }
}
