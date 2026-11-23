import { NextRequest, NextResponse } from 'next/server';
import { subToPaymentStatus } from './payment-status-service.ts';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    const paymentStatusStream = new ReadableStream({
        // todo: look into what a controller actually is
        start(controller) {
            const encoder = new TextEncoder();
            controller.enqueue(
                encoder.encode(
                    `data: ${JSON.stringify({ message: 'Connected!' })}\n\n`,
                ),
            );

            const heartbeat = setInterval(() => {
                controller.enqueue(
                    encoder.encode(
                        `data: ${JSON.stringify({ started: Math.random() })}\n\n`,
                    ),
                );
            }, 3000);

            const unsub = subToPaymentStatus((paymentId, status) => {
                controller.enqueue(
                    encoder.encode(
                        `data: ${JSON.stringify({ paymentId, status })}\n\n`,
                    ),
                );
            });

            req.signal.addEventListener('abort', () => {
                unsub();
                clearInterval(heartbeat);
                controller.close();
            });
        },
    });

    return new NextResponse(paymentStatusStream, {
        headers: {
            'Content-Type': 'text/event-stream',
            Connection: 'keep-alive',
            'Cache-Control': 'no-cache, no-transform',
            'X-Accel-Buffering': 'no',
        },
    });
}
