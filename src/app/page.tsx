import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import SectionTitle from '@/components/SectionTitle';
import { getAllPublicacoes } from '@/lib/publicacoes';
import PublicacaoCard from '@/components/PublicacaoCard';

export const dynamic = 'force-dynamic';

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: 'Automação de Atendimento',
    description: 'Chatbots inteligentes, fluxos automatizados e integração com WhatsApp, Instagram e outros canais para escalar seu atendimento.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: 'Integrações de Sistemas',
    description: 'Conectamos ERPs, CRMs, plataformas de e-commerce e ferramentas internas com APIs robustas e pipelines confiáveis.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: 'Dashboards & BI',
    description: 'Painéis interativos e relatórios em tempo real que transformam dados brutos em insights acionáveis para decisões estratégicas.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'Consultoria em Dados',
    description: 'Diagnóstico, arquitetura de dados e estratégia personalizada para maximizar o potencial dos seus dados corporativos.',
  },
];

const stats = [
  { value: '50+', label: 'Projetos entregues' },
  { value: '98%', label: 'Satisfação dos clientes' },
  { value: '3x', label: 'Aumento médio de eficiência' },
  { value: '24/7', label: 'Automações ativas' },
];

export default async function Home() {
  const allPubs = await getAllPublicacoes();
  const publicacoes = allPubs.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-bg-secondary to-accent-start/10">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent-start/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-light/8 blur-[100px]" />
        </div>

        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center pt-32 pb-20">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-accent-start/10 text-accent-dark border border-accent-start/20 mb-6">
              Soluções inteligentes em dados
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 animate-fade-in-up text-text-primary" style={{ animationDelay: '0.1s' }}>
            Transformamos <br />
            <span className="gradient-text">dados em resultados</span>
          </h1>

          <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Automação de atendimento, integrações de sistemas e inteligência de dados para empresas que querem crescer com eficiência.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button href="/contato" variant="primary">
              Iniciar Projeto
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Button>
            <Button href="/servicos" variant="secondary">
              Nossos Serviços
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex justify-center pt-2">
            <div className="w-1 h-2.5 rounded-full bg-text-muted/50 animate-pulse-glow" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionTitle
            subtitle="O que fazemos"
            title="Soluções sob medida para seus dados"
            description="Da automação de atendimento à inteligência de negócios, oferecemos o ecossistema completo para transformar seus dados em vantagem competitiva."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 relative bg-bg-secondary">
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl lg:text-5xl font-extrabold gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-text-secondary text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      {publicacoes.length > 0 && (
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionTitle
              subtitle="Cases"
              title="Resultados que falam por si"
              description="Conheça projetos reais e os resultados que entregamos para nossos clientes."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publicacoes.map((pub) => (
                <PublicacaoCard key={pub.slug} {...pub} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button href="/publicacoes" variant="outline">Ver todas as publicações</Button>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 lg:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-start to-accent-dark" />
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} />
            <div className="relative z-10">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Pronto para transformar<br />seus dados?
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
                Entre em contato e descubra como podemos otimizar seus processos e aumentar seus resultados.
              </p>
              <Button href="/contato" className="!bg-white !text-text-primary hover:!bg-white/90 !shadow-lg">
                Agendar uma conversa
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
