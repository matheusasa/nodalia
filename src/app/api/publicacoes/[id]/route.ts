import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type Props = { params: Promise<{ id: string }> };

export async function PUT(request: Request, { params }: Props) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { title, resumo, content, imagem, tags, published } = body;

    const slug = title
      ? title
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')
      : undefined;

    const publicacao = await prisma.publicacao.update({
      where: { id: parseInt(id) },
      data: {
        ...(title && { title }),
        ...(slug && { slug }),
        ...(resumo && { resumo }),
        ...(content && { content }),
        ...(imagem !== undefined && { imagem: imagem || null }),
        ...(tags && { tags: JSON.stringify(tags) }),
        ...(published !== undefined && { published }),
      },
    });

    return NextResponse.json(publicacao);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao atualizar publicação' }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: Props) {
  try {
    const { id } = await params;
    await prisma.publicacao.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao deletar publicação' }, { status: 500 });
  }
}
