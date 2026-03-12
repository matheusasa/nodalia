import type { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Sobre — Nodalia',
  description: 'Conheça a Nodalia: nossa missão, valores e a equipe por trás das soluções inteligentes em dados.',
};

const valores = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Inovação',
    description: 'Buscamos constantemente as melhores tecnologias e abordagens para entregar soluções de ponta.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Confiança',
    description: 'Transparência, segurança e ética são pilares fundamentais em cada projeto que desenvolvemos.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Parceria',
    description: 'Trabalhamos lado a lado com nossos clientes, entendendo suas necessidades e entregando valor real.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Resultados',
    description: 'Foco absoluto em métricas e resultados mensuráveis. Se não gera impacto, não faz sentido.',
  },
];

const timeline = [
  { year: '2023', title: 'Fundação', description: 'A Nodalia nasce com a missão de democratizar soluções de dados para empresas de todos os portes.' },
  { year: '2024', title: 'Expansão', description: 'Ampliação do portfólio com automação de atendimento e integrações avançadas de sistemas.' },
  { year: '2025', title: 'Consolidação', description: 'Reconhecimento no mercado com mais de 50 projetos entregues e clientes satisfeitos em todo o Brasil.' },
  { year: '2026', title: 'Inovação Contínua', description: 'Investindo em IA e machine learning para levar nossas soluções ao próximo nível.' },
];

export default function Sobre() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-start/8 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-accent-start/10 text-accent-dark border border-accent-start/20 mb-6">
            Quem somos
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
            Engenharia de dados <br />
            <span className="gradient-text">com propósito</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            A Nodalia nasceu para resolver um problema claro: empresas possuem dados valiosos, mas nem sempre sabem como utilizá-los. Nós conectamos dados a resultados.
          </p>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Nossa <span className="gradient-text">Missão</span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Democratizar o acesso a soluções inteligentes de dados, permitindo que empresas de todos os portes tomem decisões baseadas em informações concretas, automatizem processos repetitivos e escalem com eficiência.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Acreditamos que dados são o ativo mais valioso de uma empresa. Nossa missão é transformar esse ativo bruto em vantagem competitiva, com tecnologia de ponta e atendimento humano de excelência.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl bg-bg-secondary border border-border-subtle p-8 lg:p-10 shadow-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="font-heading text-3xl font-extrabold gradient-text mb-1">50+</div>
                    <p className="text-text-secondary text-sm">Projetos</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="font-heading text-3xl font-extrabold gradient-text mb-1">30+</div>
                    <p className="text-text-secondary text-sm">Clientes</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="font-heading text-3xl font-extrabold gradient-text mb-1">98%</div>
                    <p className="text-text-secondary text-sm">Satisfação</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="font-heading text-3xl font-extrabold gradient-text mb-1">3+</div>
                    <p className="text-text-secondary text-sm">Anos de mercado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle
            subtitle="Nossos Valores"
            title="O que nos move"
            description="Princípios que guiam cada decisão e cada linha de código."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor) => (
              <div key={valor.title} className="group p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-border-hover transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent-start/20 to-accent-end/20 text-accent-dark mb-5 group-hover:scale-110 transition-transform duration-300">
                  {valor.icon}
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{valor.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[800px] mx-auto px-6">
          <SectionTitle
            subtitle="Nossa Jornada"
            title="Linha do Tempo"
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-border-subtle" />

            <div className="space-y-12">
              {timeline.map((item) => (
                <div key={item.year} className="relative pl-14">
                  {/* Dot */}
                  <div className="absolute left-2.5 top-1 w-[18px] h-[18px] rounded-full bg-gradient-to-br from-accent-start to-accent-dark border-4 border-bg-secondary" />
                  <span className="text-sm font-semibold text-accent-dark mb-1 block">{item.year}</span>
                  <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Quer fazer parte dessa <span className="gradient-text">história</span>?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Entre em contato e descubra como podemos ajudar sua empresa a crescer com dados.
          </p>
          <Button href="/contato" variant="primary">Fale Conosco</Button>
        </div>
      </section>
    </>
  );
}
