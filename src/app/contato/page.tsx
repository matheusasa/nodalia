'use client';

import { useState } from 'react';
import Button from '@/components/Button';

export default function Contato() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-36 pb-16 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-end/8 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-accent-start/10 text-accent-dark border border-accent-start/20 mb-6">
            Contato
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
            Vamos <span className="gradient-text">conversar</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            Conte-nos sobre seu projeto e descubra como podemos ajudar sua empresa a crescer com dados.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-bg-card border border-border-subtle p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent-end/20 text-accent-end mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-bold mb-2">Mensagem enviada!</h3>
                    <p className="text-text-secondary">Entraremos em contato em breve. Obrigado!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nome" className="block text-sm font-medium mb-2">Nome</label>
                        <input type="text" id="nome" name="nome" required placeholder="Seu nome"
                          className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-start focus:ring-1 focus:ring-accent-start/30 transition-all" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input type="email" id="email" name="email" required placeholder="seu@email.com"
                          className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-start focus:ring-1 focus:ring-accent-start/30 transition-all" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium mb-2">Empresa</label>
                      <input type="text" id="empresa" name="empresa" placeholder="Nome da empresa"
                        className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-start focus:ring-1 focus:ring-accent-start/30 transition-all" />
                    </div>
                    <div>
                      <label htmlFor="servico" className="block text-sm font-medium mb-2">Serviço de interesse</label>
                      <select id="servico" name="servico"
                        className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-border-subtle text-text-primary focus:outline-none focus:border-accent-start focus:ring-1 focus:ring-accent-start/30 transition-all">
                        <option value="">Selecione...</option>
                        <option value="automacao">Automação de Atendimento</option>
                        <option value="integracoes">Integrações de Sistemas</option>
                        <option value="dashboards">Dashboards & BI</option>
                        <option value="consultoria">Consultoria em Dados</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="mensagem" className="block text-sm font-medium mb-2">Mensagem</label>
                      <textarea id="mensagem" name="mensagem" rows={5} required placeholder="Conte-nos sobre seu projeto..."
                        className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-start focus:ring-1 focus:ring-accent-start/30 transition-all resize-none" />
                    </div>
                    <Button type="submit" variant="primary" className="w-full sm:w-auto">
                      Enviar Mensagem
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {[
                { icon: '✉️', title: 'Email', value: 'contato@nodalia.com.br' },
                { icon: '📍', title: 'Localização', value: 'Brasil — Atendimento remoto' },
                { icon: '⏰', title: 'Horário', value: 'Seg-Sex, 9h às 18h' },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-bg-card border border-border-subtle">
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <h3 className="font-heading font-bold mb-1">{item.title}</h3>
                  <p className="text-text-secondary text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
