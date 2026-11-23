import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    console.log(await req.json());
    return Response.json({ status: 200 });
}
