import type { Metadata } from 'next';
import { getAllPublicacoes } from '@/lib/publicacoes';
import PublicacaoCard from '@/components/PublicacaoCard';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Publicações — Nodalia',
  description: 'Cases de sucesso, artigos e insights sobre automação, dados e integrações pela Nodalia.',
};

export default async function Publicacoes() {
  const publicacoes = await getAllPublicacoes();

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/3 w-[400px] h-[400px] rounded-full bg-accent-start/8 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-accent-start/10 text-accent-dark border border-accent-start/20 mb-6">
            Publicações
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
            Cases & <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            Conheça nossos cases de sucesso, artigos técnicos e insights sobre o mundo dos dados.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          {publicacoes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publicacoes.map((pub) => (
                <PublicacaoCard key={pub.slug} {...pub} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-bg-card border border-border-subtle mx-auto mb-6">
                <svg className="w-10 h-10 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Nenhuma publicação ainda</h3>
              <p className="text-text-secondary text-sm max-w-md mx-auto">
                Em breve publicaremos cases de sucesso e artigos técnicos. Fique de olho!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
