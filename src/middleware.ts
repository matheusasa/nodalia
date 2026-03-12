import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from './lib/auth';

// Constantes de rotas
const LOGIN_URL = '/admin/login';
const PROTECTED_ROUTES = ['/admin'];
const PROTECTED_API_ROUTES = ['/api/publicacoes'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verifica se é uma rota de API que precisa de proteção (ex: POST, PUT, DELETE em /api/publicacoes)
  const isProtectedApi = PROTECTED_API_ROUTES.some((route) => pathname.startsWith(route));
  const isModifyingMethod = ['POST', 'PUT', 'DELETE'].includes(request.method);

  // Verifica se é uma rota do frontend protegida (ex: /admin)
  // Mas permite o acesso livre a /admin/login
  const isProtectedFrontend = PROTECTED_ROUTES.some((route) => pathname.startsWith(route)) && pathname !== LOGIN_URL;

  if ((isProtectedApi && isModifyingMethod) || isProtectedFrontend) {
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      if (isProtectedApi) {
        return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
      }
      return NextResponse.redirect(new URL(LOGIN_URL, request.url));
    }

    const payload = await verifyToken(token);

    if (!payload) {
      if (isProtectedApi) {
        return NextResponse.json({ error: 'Token inválido ou expirado' }, { status: 401 });
      }
      return NextResponse.redirect(new URL(LOGIN_URL, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/publicacoes/:path*'],
};
