import { cookies } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';

export default async function proxy(req: NextRequest) {
    const isLoggedIn = (await cookies()).get('loggedIn')?.value;

    if (!isLoggedIn && req.nextUrl.href.includes('dashboard')) {
        return NextResponse.redirect(new URL('/', req.nextUrl));
    }

    return NextResponse.next();
}
