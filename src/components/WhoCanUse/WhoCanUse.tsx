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
      className="top-[-80px] bg-blue-900 text-white py-12 px-6 rounded-3xl shadow-lg max-w-7xl mx-auto relative"
      aria-labelledby="who-can-use-heading"
    >
      <div className="flex flex-col w-full ls-1-1:max-w-[60%] mb-10 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-3 text-colorMediumGray">
          Central IA
        </h1>
        <h2
          id="who-can-use-heading"
          className="text-3xl md:text-4xl lg:text-5xl mb-3 font-bold"
        >
          Quem pode utilizá-lo?
        </h2>
        <p className="text-base md:text-lg lg:text-xl">
          Lojas de comércio eletronico ou agências de marketing com muitas
          contas...
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          Basicamente qualquer pessoa que precise de várias ferramentas de I.A.
          em um só lugar!
        </p>
      </div>
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
