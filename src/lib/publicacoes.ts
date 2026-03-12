import { prisma } from './prisma';

export type Publicacao = {
  slug: string;
  title: string;
  date: string;
  resumo: string;
  imagem?: string;
  tags: string[];
  content: string;
};

export async function getAllPublicacoes(): Promise<Publicacao[]> {
  try {
    const pubs = await prisma.publicacao.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    });

    return pubs.map((p) => ({
      slug: p.slug,
      title: p.title,
      date: p.createdAt.toISOString(),
      resumo: p.resumo,
      imagem: p.imagem || undefined,
      tags: JSON.parse(p.tags) as string[],
      content: p.content,
    }));
  } catch {
    // Fallback: if DB is not available yet, return empty
    return [];
  }
}

export async function getPublicacaoBySlug(slug: string): Promise<Publicacao | null> {
  try {
    const p = await prisma.publicacao.findUnique({
      where: { slug },
    });

    if (!p) return null;

    return {
      slug: p.slug,
      title: p.title,
      date: p.createdAt.toISOString(),
      resumo: p.resumo,
      imagem: p.imagem || undefined,
      tags: JSON.parse(p.tags) as string[],
      content: p.content,
    };
  } catch {
    return null;
  }
}
