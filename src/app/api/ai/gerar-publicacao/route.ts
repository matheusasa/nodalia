import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { assunto, instrucoes } = await req.json();

    if (!assunto) {
      return NextResponse.json(
        { error: "Assunto é obrigatório." },
        { status: 400 },
      );
    }

    const prompt = `Você é um redator especializado em tecnologia, dados, automação e transformação digital para empresas.
Gere uma publicação completa em português brasileiro para um blog/portfólio profissional.

Assunto: ${assunto}
${instrucoes ? `Instruções adicionais: ${instrucoes}` : ""}

Retorne APENAS um JSON válido com o seguinte formato, sem texto extra:
{
  "title": "Título atrativo e profissional",
  "resumo": "Resumo de 1-2 frases para preview (máx 200 caracteres)",
  "content": "Conteúdo completo em Markdown com seções, listas e formatação rica (mínimo 600 palavras)",
  "tags": ["tag1", "tag2", "tag3"]
}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-5-mini",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
      temperature: 1,
    });

    const raw = completion.choices[0].message.content ?? "{}";
    const data = JSON.parse(raw);

    return NextResponse.json(data);
  } catch (err) {
    console.error("[AI] Erro ao gerar publicação:", err);
    return NextResponse.json(
      { error: "Falha ao gerar publicação com IA." },
      { status: 500 },
    );
  }
}
