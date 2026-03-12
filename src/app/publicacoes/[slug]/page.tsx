import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPublicacaoBySlug } from '@/lib/publicacoes';

export const dynamic = 'force-dynamic';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pub = await getPublicacaoBySlug(slug);
  if (!pub) return {};
  return { title: `${pub.title} — Nodalia`, description: pub.resumo };
}

function md2html(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/^(?!<[hulo])(.*\S.*)$/gm, '<p>$1</p>')
    .replace(/\n{2,}/g, '\n');
}

export default async function PublicacaoPage({ params }: Props) {
  const { slug } = await params;
  const pub = await getPublicacaoBySlug(slug);
  if (!pub) notFound();

  return (
    <>
      <section className="pt-36 pb-12">
        <div className="max-w-[800px] mx-auto px-6">
          <Link href="/publicacoes" className="inline-flex items-center gap-1 text-sm text-text-muted hover:text-text-primary transition-colors mb-8 group">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
            Voltar para publicações
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <time className="text-sm text-text-muted">{new Date(pub.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</time>
            {pub.tags.map((t: string) => (
              <span key={t} className="text-xs px-2.5 py-0.5 rounded-full bg-accent-start/10 text-accent-dark font-medium">{t}</span>
            ))}
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">{pub.title}</h1>
          <p className="text-text-secondary text-lg leading-relaxed border-l-4 border-accent-dark pl-4">{pub.resumo}</p>

          {pub.imagem && (
            <div className="mt-8 rounded-2xl overflow-hidden">
              <img src={pub.imagem} alt={pub.title} className="w-full h-auto" />
            </div>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[800px] mx-auto px-6">
          <article
            className="[&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-text-secondary [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-text-secondary [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:leading-relaxed [&_strong]:text-text-primary [&_a]:text-accent-dark [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-accent-dark [&_blockquote]:pl-4 [&_blockquote]:italic [&_code]:bg-bg-tertiary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_hr]:border-border-subtle [&_hr]:my-8"
            dangerouslySetInnerHTML={{ __html: md2html(pub.content) }}
          />
        </div>
      </section>
    </>
  );
}
