import type { NextRequest } from 'next/server';

export function POST(req: NextRequest) {
    console.log(req.body);

    return Response.json({ resp: req.headers.get('Idempotency-Key') });
}
