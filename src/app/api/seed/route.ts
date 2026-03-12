import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const samplePublicacoes = [
  {
    slug: 'automacao-atendimento-clinicas',
    title: 'Como automatizamos o atendimento de uma rede de clínicas',
    resumo: 'Reduzimos o tempo de resposta em 80% e aumentamos a satisfação dos pacientes com automação inteligente de atendimento.',
    content: `## O Desafio

Uma rede de clínicas com 12 unidades enfrentava dificuldades em gerenciar o volume crescente de mensagens recebidas via WhatsApp, Instagram e telefone. O tempo médio de resposta era superior a 4 horas, gerando insatisfação e perda de pacientes.

## Nossa Abordagem

Implementamos um sistema integrado de automação de atendimento com:

- **Chatbot inteligente** com processamento de linguagem natural
- **Fluxos automatizados** de agendamento, confirmação e reagendamento
- **Integração direta** com o sistema de gestão de consultas
- **Dashboard em tempo real** para monitoramento da equipe

## Resultados

- Tempo de resposta reduzido de 4h para **menos de 30 segundos**
- Aumento de **35% na taxa de agendamentos**
- Redução de **60% no volume de atendimentos manuais**
- NPS subiu de 42 para **78 pontos**`,
    tags: JSON.stringify(['automação', 'whatsapp']),
    published: true,
  },
  {
    slug: 'integracao-erp-crm-ecommerce',
    title: 'Integrando ERP, CRM e e-commerce: o caso de uma distribuidora',
    resumo: 'Eliminamos retrabalho manual e erros de estoque conectando três sistemas que operavam de forma isolada.',
    content: `## O Problema

Uma distribuidora de grande porte operava com três sistemas independentes: um ERP para gestão financeira, um CRM para vendas e uma plataforma de e-commerce B2B. A falta de integração causava duplicidade de dados, erros de estoque e atrasos nas entregas.

## A Solução

Desenvolvemos uma camada de integração robusta usando:

- **APIs RESTful** customizadas para cada sistema
- **Webhooks** para sincronização em tempo real
- **Fila de mensagens** para garantir consistência de dados
- **Painel de monitoramento** com alertas automáticos

## Impacto

- Eliminação de **100% do retrabalho** de cadastro manual
- Redução de **95% nos erros** de estoque
- Aumento de **25% na velocidade** de processamento de pedidos
- ROI positivo em **menos de 3 meses**`,
    tags: JSON.stringify(['integração', 'ERP']),
    published: true,
  },
  {
    slug: 'dashboard-bi-logistica',
    title: 'Dashboard de BI em tempo real para logística',
    resumo: 'Criamos uma solução de Business Intelligence que transformou a tomada de decisão de uma empresa de logística.',
    content: `## Contexto

Uma empresa de logística com mais de 200 veículos na frota não possuía visibilidade real sobre seus indicadores operacionais. As decisões eram tomadas com base em relatórios semanais defasados.

## O que Entregamos

Um dashboard interativo e em tempo real com:

- **Monitoramento de frota** com rastreamento GPS integrado
- **KPIs operacionais** atualizados a cada 5 minutos
- **Análises preditivas** de manutenção e consumo
- **Relatórios automatizados** enviados por email e WhatsApp

## Resultados Obtidos

- Redução de **18% no consumo de combustível**
- Diminuição de **40% em paradas** não planejadas
- Melhoria de **22% na pontualidade** das entregas
- Economia anual estimada em **R$ 1,2 milhão**`,
    tags: JSON.stringify(['BI', 'logística']),
    published: true,
  },
];

export async function GET() {
  try {
    for (const pub of samplePublicacoes) {
      await prisma.publicacao.upsert({
        where: { slug: pub.slug },
        update: pub,
        create: pub,
      });
    }
    return NextResponse.json({ success: true, message: 'Seed completed! 3 publicações criadas.' });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
