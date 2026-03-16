import { NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json({ error: 'Senha é obrigatória' }, { status: 400 });
    }

    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
      // Falha se a variável de ambiente não estiver configurada no servidor (segurança)
      return NextResponse.json({ error: 'Configuração do servidor ausente' }, { status: 500 });
    }

    if (password !== adminPassword) {
      return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 });
    }

    // Gerar token
    const token = await signToken({ role: 'admin' });

    // Configurar a resposta e o cookie
    const response = NextResponse.json({ success: true });
    
    response.cookies.set({
      name: 'admin_token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 horas
    });

    return response;
  } catch {
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
  }
}
