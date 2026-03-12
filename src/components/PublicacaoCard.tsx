import Link from 'next/link';

type PublicacaoCardProps = {
  slug: string;
  title: string;
  resumo: string;
  date: string;
  tags?: string[];
  imagem?: string;
};

export default function PublicacaoCard({ slug, title, resumo, date, tags = [], imagem }: PublicacaoCardProps) {
  return (
    <Link href={`/publicacoes/${slug}`} className="group block">
      <article className="relative rounded-2xl bg-white border border-border-subtle overflow-hidden hover:border-border-hover hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(109,227,209,0.12)] shadow-sm">
        <div className="relative h-48 overflow-hidden bg-bg-secondary">
          {imagem ? (
            <img src={imagem} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-accent-start/15 to-accent-end/15 flex items-center justify-center">
              <svg className="w-12 h-12 text-accent-dark/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <time className="text-xs text-text-muted">
              {new Date(date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
            </time>
            {tags.length > 0 && (
              <div className="flex gap-2">
                {tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-accent-start/10 text-accent-dark font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <h3 className="font-heading text-lg font-bold mb-2 text-text-primary group-hover:text-accent-dark transition-colors duration-200">
            {title}
          </h3>
          <p className="text-text-secondary text-sm line-clamp-2 leading-relaxed">{resumo}</p>

          <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-accent-dark group-hover:gap-2 transition-all duration-300">
            Ler mais
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}
