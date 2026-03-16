import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const publicacoes = await prisma.publicacao.findMany({
      orderBy: { createdAt: "desc" },
    });

    const result = publicacoes.map((p: (typeof publicacoes)[number]) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      resumo: p.resumo,
      content: p.content,
      imagem: p.imagem,
      tags: JSON.parse(p.tags),
      published: p.published,
      createdAt: p.createdAt.toISOString(),
      updatedAt: p.updatedAt.toISOString(),
    }));

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar publicações" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, resumo, content, imagem, tags, published } = body;

    if (!title || !resumo || !content) {
      return NextResponse.json(
        { error: "Título, resumo e conteúdo são obrigatórios" },
        { status: 400 },
      );
    }

    const slug = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    const publicacao = await prisma.publicacao.create({
      data: {
        slug,
        title,
        resumo,
        content,
        imagem: imagem || null,
        tags: JSON.stringify(tags || []),
        published: published ?? true,
      },
    });

    return NextResponse.json(publicacao, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao criar publicação" },
      { status: 500 },
    );
  }
}
