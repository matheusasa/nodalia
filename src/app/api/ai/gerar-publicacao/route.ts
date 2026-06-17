import { NextRequest, NextResponse } from "next/server";

const geminiApiKey = process.env.GEMINI_API_KEY ?? process.env.GOOGLE_API_KEY;
const geminiModel = process.env.GEMINI_MODEL ?? "gemini-1.5-flash";

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

    if (!geminiApiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY ou GOOGLE_API_KEY não foi configurada." },
        { status: 500 },
      );
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${geminiModel}:generateContent?key=${geminiApiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 1,
            responseMimeType: "application/json",
          },
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API respondeu com erro: ${response.status} ${errorText}`);
    }

    const payload = await response.json();
    const raw = payload?.candidates?.[0]?.content?.parts?.[0]?.text ?? "{}";
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
