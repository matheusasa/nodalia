import type { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Serviços — Nodalia',
  description: 'Conheça nossos serviços: automação de atendimento, integrações de sistemas, dashboards, BI e consultoria em dados.',
};

const servicos = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: 'Automação de Atendimento',
    description: 'Escale seu atendimento sem perder qualidade. Criamos chatbots inteligentes e fluxos automatizados integrados aos principais canais de comunicação.',
    features: [
      'Chatbots com IA para WhatsApp, Instagram e Telegram',
      'Fluxos de atendimento automatizados com escalonamento inteligente',
      'Integração com CRM e sistemas de tickets',
      'Relatórios de performance e satisfação do cliente',
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: 'Integrações de Sistemas',
    description: 'Conecte todas as ferramentas do seu ecossistema. Eliminamos silos de dados e criamos fluxos de informação contínuos entre suas plataformas.',
    features: [
      'APIs REST e webhooks customizados',
      'Integração com ERPs, CRMs e e-commerce',
      'Pipelines ETL/ELT robustos e escaláveis',
      'Monitoramento e alertas em tempo real',
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Dashboards & BI',
    description: 'Visualize seus dados de forma intuitiva e tome decisões informadas. Criamos painéis interativos que transformam dados em insights acionáveis.',
    features: [
      'Dashboards interativos com atualização em tempo real',
      'KPIs personalizados por área de negócio',
      'Integração com múltiplas fontes de dados',
      'Relatórios automatizados e exportáveis',
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'Consultoria em Dados',
    description: 'Diagnóstico completo e estratégia personalizada. Analisamos sua maturidade em dados e traçamos o caminho ideal para seu negócio.',
    features: [
      'Diagnóstico de maturidade em dados',
      'Arquitetura de data warehouse e data lake',
      'Governança e qualidade de dados',
      'Treinamento e capacitação de equipes',
    ],
  },
];

const etapas = [
  { step: '01', title: 'Diagnóstico', description: 'Entendemos seu cenário, seus dados e seus objetivos de negócio.' },
  { step: '02', title: 'Planejamento', description: 'Desenhamos a solução ideal com roadmap, prazos e entregáveis claros.' },
  { step: '03', title: 'Implementação', description: 'Desenvolvemos, testamos e iteramos com agilidade e transparência.' },
  { step: '04', title: 'Acompanhamento', description: 'Monitoramos, otimizamos e evoluímos para garantir resultados contínuos.' },
];

export default function Servicos() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-accent-end/8 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-accent-start/10 text-accent-dark border border-accent-start/20 mb-6">
            Serviços
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
            Soluções completas em{' '}
            <span className="gradient-text">dados e automação</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            Do diagnóstico à implementação, oferecemos soluções end-to-end para transformar seus dados em resultados tangíveis.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 space-y-12">
          {servicos.map((servico, i) => (
            <div
              key={servico.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-8 md:p-12 rounded-3xl bg-bg-card border border-border-subtle ${
                i % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-start/20 to-accent-end/20 text-accent-dark mb-6">
                  {servico.icon}
                </div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">{servico.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-6">{servico.description}</p>
                <ul className="space-y-3">
                  {servico.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-text-secondary">
                      <svg className="w-5 h-5 text-accent-end flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} flex items-center justify-center`}>
                <div className="w-full max-w-sm aspect-square rounded-2xl bg-gradient-to-br from-accent-start/10 to-accent-end/10 border border-border-subtle flex items-center justify-center">
                  <div className="text-accent-dark opacity-30 scale-[3]">
                    {servico.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle
            subtitle="Como Trabalhamos"
            title="Nosso Processo"
            description="Um fluxo de trabalho validado para garantir entregas de qualidade e resultados mensuráveis."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapas.map((etapa) => (
              <div key={etapa.step} className="relative p-8 rounded-2xl bg-bg-card border border-border-subtle text-center group hover:border-border-hover transition-all duration-300">
                <span className="font-heading text-4xl font-extrabold gradient-text block mb-3">{etapa.step}</span>
                <h3 className="font-heading text-lg font-bold mb-2">{etapa.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{etapa.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Precisa de uma <span className="gradient-text">solução personalizada</span>?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Cada negócio é único. Vamos conversar e entender como podemos ajudar o seu.
          </p>
          <Button href="/contato" variant="primary">
            Solicitar Orçamento
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Button>
        </div>
      </section>
    </>
  );
}
