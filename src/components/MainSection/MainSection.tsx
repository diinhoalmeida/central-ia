import { IAList } from "./IAList";

export function MainSection() {
  const mostAccessedIAs = [
    { name: "ChatGPT", company: "OpenAI" },
    { name: "MidJourney", company: "MidJourney, Inc" },
    { name: "Gemini", company: "Google" },
    { name: "Copilot", company: "Microsoft" },
    { name: "Jasper", company: "Jasper, Inc" },
  ];

  const recentIAs = [
    { name: "Copilot", company: "Microsoft" },
    { name: "Jasper", company: "Jasper, Inc" },
    { name: "ChatGPT", company: "OpenAI" },
    { name: "MidJourney", company: "MidJourney, Inc" },
    { name: "Gemini", company: "Google" },
  ];

  const categories = [
    { name: "Produtividade" },
    { name: "Geração de Imagens" },
    { name: "Geração de Texto" },
    { name: "Análise de PDF" },
    { name: "Análise de PDF" }
  ];

  return (
    <section className="bg-transparent relative z-10 top-[-170px] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md-1:grid-cols-3 gap-12">
        <IAList title="IAs Mais Acessadas" items={mostAccessedIAs} />
        <IAList title="IAs Recentes" items={recentIAs} />
        <IAList
          title="Categorias Mais Acessadas"
          items={categories}
          isCompanyIncluded={false}
        />
      </div>
    </section>
  );
}
