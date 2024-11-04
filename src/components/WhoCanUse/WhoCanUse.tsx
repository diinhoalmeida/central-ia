import {
  FaRocket,
  FaShoppingCart,
  FaChartLine,
  FaBuilding,
} from "react-icons/fa";
import { Card } from "./Card/Card";

export function WhoCanUse() {
  return (
    <section
      className="bg-blue-900 text-white py-12 px-6 rounded-lg shadow-lg max-w-7xl mx-auto"
      aria-labelledby="who-can-use-heading"
    >
      <h2 id="who-can-use-heading" className="text-3xl font-bold mb-8">
        Central IA - Quem pode utilizá-lo?
      </h2>
      <div className="grid ls-1-1:grid-cols-2 ls-2:grid-cols-4 md-1:grid-cols-1 gap-6">
        <Card
          icon={FaRocket}
          id="startups-heading"
          title="Startups"
          description="Deixe o nosso modelo de aprendizagem de máquinas gerar banners personalizados para todo o seu catálogo de produtos."
          linkLabel="Saiba mais"
          ariaLabel="Saiba mais sobre como Central IA pode ajudar Startups"
        />
        <Card
          icon={FaShoppingCart}
          id="ecommerce-heading"
          title="Comercio Eletrônico"
          description="Deixe o nosso modelo de aprendizagem de máquinas gerar banners personalizados para todo o seu catálogo de produtos."
          linkLabel="Saiba mais"
          ariaLabel="Saiba mais sobre como Central IA pode ajudar no Comercio Eletrônico"
        />
        <Card
          icon={FaChartLine}
          id="agencies-heading"
          title="Agências"
          description="Deixe o nosso modelo de aprendizagem de máquinas gerar banners personalizados para todo o seu catálogo de produtos."
          linkLabel="Saiba mais"
          ariaLabel="Saiba mais sobre como Central IA pode ajudar Agências"
        />
        <Card
          icon={FaBuilding}
          id="companies-heading"
          title="Empresas"
          description="Deixe o nosso modelo de aprendizagem de máquinas gerar banners personalizados para todo o seu catálogo de produtos."
          linkLabel="Saiba mais"
          ariaLabel="Saiba mais sobre como Central IA pode ajudar Empresas"
        />
      </div>
    </section>
  );
}
