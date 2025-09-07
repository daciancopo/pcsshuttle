import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Suppress noisy 404 logs coming from the IDE/devtools that request non-Next assets.
export function middleware(req: NextRequest) {
  const { pathname } = new URL(req.url);

  // Handle IDE/devtools Vite client pings gracefully
  if (pathname.startsWith('/@vite')) {
    return new Response(null, { status: 204 });
  }

  // Handle Chrome DevTools well-known probe
  if (pathname === '/.well-known/appspecific/com.chrome.devtools.json') {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  }

  return NextResponse.next();
}

// Only run for the paths we care about
export const config = {
  matcher: ['/@vite/:path*', '/.well-known/appspecific/com.chrome.devtools.json'],
};