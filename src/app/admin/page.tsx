"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

type Publicacao = {
  id: number;
  slug: string;
  title: string;
  resumo: string;
  content: string;
  imagem: string | null;
  tags: string[];
  published: boolean;
  createdAt: string;
};

export default function Admin() {
  const [pubs, setPubs] = useState<Publicacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({
    title: "",
    resumo: "",
    content: "",
    imagem: "",
    tags: "",
    published: true,
  });
  const [saving, setSaving] = useState(false);
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [aiAssunto, setAiAssunto] = useState("");
  const [aiInstrucoes, setAiInstrucoes] = useState("");
  const [aiGenerating, setAiGenerating] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    fetch("/api/auth/logout", { method: "POST" }).finally(() => {
      router.push("/admin/login");
      router.refresh();
    });
  };

  const fetchPubs = async () => {
    try {
      const res = await fetch("/api/publicacoes");
      const data = await res.json();
      setPubs(Array.isArray(data) ? data : []);
    } catch {
      setPubs([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPubs();
  }, []);

  const resetForm = () => {
    setForm({
      title: "",
      resumo: "",
      content: "",
      imagem: "",
      tags: "",
      published: true,
    });
    setEditingId(null);
    setShowForm(false);
    setShowAIPanel(false);
    setAiAssunto("");
    setAiInstrucoes("");
  };

  const handleGerarIA = async () => {
    if (!aiAssunto.trim()) {
      alert("Informe o assunto para gerar a publicação.");
      return;
    }
    setAiGenerating(true);
    try {
      const res = await fetch("/api/ai/gerar-publicacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ assunto: aiAssunto, instrucoes: aiInstrucoes }),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error ?? "Erro ao gerar.");
        return;
      }
      setForm((prev) => ({
        ...prev,
        title: data.title ?? prev.title,
        resumo: data.resumo ?? prev.resumo,
        content: data.content ?? prev.content,
        tags: Array.isArray(data.tags) ? data.tags.join(", ") : prev.tags,
      }));
      setShowAIPanel(false);
    } catch {
      alert("Erro ao conectar com a IA.");
    }
    setAiGenerating(false);
  };

  const handleEdit = (pub: Publicacao) => {
    setForm({
      title: pub.title,
      resumo: pub.resumo,
      content: pub.content,
      imagem: pub.imagem || "",
      tags: pub.tags.join(", "),
      published: pub.published,
    });
    setEditingId(pub.id);
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const body = {
      title: form.title,
      resumo: form.resumo,
      content: form.content,
      imagem: form.imagem || null,
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      published: form.published,
    };

    try {
      if (editingId) {
        await fetch(`/api/publicacoes/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      } else {
        await fetch("/api/publicacoes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      }
      resetForm();
      fetchPubs();
    } catch {
      alert("Erro ao salvar.");
    }
    setSaving(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Tem certeza que deseja excluir esta publicação?")) return;
    try {
      await fetch(`/api/publicacoes/${id}`, { method: "DELETE" });
      fetchPubs();
    } catch {
      alert("Erro ao excluir.");
    }
  };

  return (
    <div className="pt-28 pb-16 min-h-screen bg-bg-secondary">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-extrabold text-text-primary">
              Publicações
            </h1>
            <p className="text-text-secondary text-sm mt-1">
              Gerencie seus cases e artigos
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                resetForm();
                setShowForm(true);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-br from-accent-start to-accent-dark text-white font-semibold text-sm rounded-xl hover:-translate-y-0.5 transition-all duration-300 shadow-[0_0_20px_rgba(109,227,209,0.3)] cursor-pointer"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Nova Publicação
            </button>
            <button
              onClick={handleLogout}
              className="p-2.5 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 transition-all cursor-pointer"
              title="Sair do painel"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-white rounded-2xl border border-border-subtle p-8 mb-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-bold">
                {editingId ? "Editar" : "Nova"} Publicação
              </h2>
              <button
                type="button"
                onClick={() => setShowAIPanel((v) => !v)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-violet-500 to-purple-700 text-white font-semibold text-sm rounded-xl hover:-translate-y-0.5 transition-all duration-300 shadow-[0_0_18px_rgba(139,92,246,0.35)] cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
                  />
                </svg>
                Gerar por IA
              </button>
            </div>

            {/* AI Panel */}
            {showAIPanel && (
              <div className="mb-6 p-5 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200">
                <p className="text-sm font-semibold text-violet-700 mb-4 flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                    />
                  </svg>
                  Geração com Inteligência Artificial
                </p>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-violet-800 mb-1">
                      Assunto *
                    </label>
                    <input
                      type="text"
                      value={aiAssunto}
                      onChange={(e) => setAiAssunto(e.target.value)}
                      placeholder="Ex: Automação de WhatsApp para clínicas médicas"
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-violet-200 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-300 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-violet-800 mb-1">
                      Instruções adicionais
                    </label>
                    <textarea
                      rows={2}
                      value={aiInstrucoes}
                      onChange={(e) => setAiInstrucoes(e.target.value)}
                      placeholder="Ex: Foco em ROI, tom consultivo, mencionar integração com ERP..."
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-violet-200 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-300 transition-all resize-none text-sm"
                    />
                  </div>
                  <div className="flex gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleGerarIA}
                      disabled={aiGenerating}
                      className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-br from-violet-500 to-purple-700 text-white font-semibold text-sm rounded-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 cursor-pointer"
                    >
                      {aiGenerating ? (
                        <>
                          <svg
                            className="w-4 h-4 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                            />
                          </svg>
                          Gerando...
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                            />
                          </svg>
                          Gerar Publicação
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAIPanel(false)}
                      className="px-4 py-2 border border-violet-200 text-violet-600 font-medium text-sm rounded-lg hover:bg-violet-50 transition-all cursor-pointer"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Título *
                </label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Título da publicação"
                  className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-start focus:ring-1 focus:ring-accent-start/30 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Resumo *
                </label>
                <textarea
                  required
                  rows={2}
                  value={form.resumo}
                  onChange={(e) => setForm({ ...form, resumo: e.target.value })}
                  placeholder="Resumo curto da publicação"
                  className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-start focus:ring-1 focus:ring-accent-start/30 transition-all resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Conteúdo (Markdown) *
                </label>
                <textarea
                  required
                  rows={10}
                  value={form.content}
                  onChange={(e) =>
                    setForm({ ...form, content: e.target.value })
                  }
                  placeholder="Escreva o conteúdo em Markdown..."
                  className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-start focus:ring-1 focus:ring-accent-start/30 transition-all resize-y font-mono text-sm"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    URL da Imagem
                  </label>
                  <input
                    type="text"
                    value={form.imagem}
                    onChange={(e) =>
                      setForm({ ...form, imagem: e.target.value })
                    }
                    placeholder="https://..."
                    className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-start focus:ring-1 focus:ring-accent-start/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Tags (separar por vírgula)
                  </label>
                  <input
                    type="text"
                    value={form.tags}
                    onChange={(e) => setForm({ ...form, tags: e.target.value })}
                    placeholder="automação, dados, whatsapp"
                    className="w-full px-4 py-3 rounded-xl bg-bg-secondary border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-start focus:ring-1 focus:ring-accent-start/30 transition-all"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="published"
                  checked={form.published}
                  onChange={(e) =>
                    setForm({ ...form, published: e.target.checked })
                  }
                  className="w-4 h-4 accent-accent-dark"
                />
                <label htmlFor="published" className="text-sm">
                  Publicado
                </label>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-br from-accent-start to-accent-dark text-white font-semibold text-sm rounded-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {saving ? "Salvando..." : editingId ? "Atualizar" : "Criar"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2.5 border border-border-subtle text-text-secondary font-medium text-sm rounded-xl hover:bg-bg-secondary transition-all cursor-pointer"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        {/* List */}
        {loading ? (
          <div className="text-center py-20 text-text-muted">Carregando...</div>
        ) : pubs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-border-subtle">
            <p className="text-text-muted">Nenhuma publicação encontrada.</p>
            <p className="text-text-muted text-sm mt-1">
              Certifique-se de que o banco MySQL está configurado e as
              migrations foram aplicadas.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {pubs.map((pub) => (
              <div
                key={pub.id}
                className="flex items-center justify-between p-5 bg-white rounded-xl border border-border-subtle shadow-sm hover:border-border-hover transition-all"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading font-bold text-text-primary truncate">
                      {pub.title}
                    </h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${pub.published ? "bg-accent-start/10 text-accent-dark" : "bg-orange-100 text-orange-600"}`}
                    >
                      {pub.published ? "Publicado" : "Rascunho"}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm truncate">
                    {pub.resumo}
                  </p>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(pub)}
                    className="p-2 rounded-lg hover:bg-bg-secondary text-text-muted hover:text-text-primary transition-all cursor-pointer"
                    title="Editar"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(pub.id)}
                    className="p-2 rounded-lg hover:bg-red-50 text-text-muted hover:text-red-500 transition-all cursor-pointer"
                    title="Excluir"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
