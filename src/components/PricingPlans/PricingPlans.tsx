import { FaCheck } from "react-icons/fa";

type PricingCardProps = {
  title: string;
  credits: string;
  text: string;
  price: string;
  features: string[];
};

export function PricingCard({
  title,
  credits,
  text,
  price,
  features,
}: PricingCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 m-4 md:m-2 sm:m-2 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-5 text-[12px]">{text}</p>
      <p className="text-4xl font-bold text-[#004773] mb-4">
        {price}
        <span className="text-lg text-gray-500"> / primeira semana</span>
      </p>
      <p className="text-center bg-blue-50 text-[#004773] py-2 rounded-lg font-semibold mb-4">
        {credits} gratuitos
      </p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <FaCheck className="text-[#004773] mr-2" /> {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-[#004773] text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Comece a trabalhar
      </button>
    </div>
  );
}

type Plan = {
  title: string;
  credits: string;
  text: string;
  price: string;
  features: string[];
};

export function PricingPlans() {
  const plans: Plan[] = [
    {
      title: "Teste gratuito",
      credits: "10 créditos",
      text: "Explore o poder da nossa plataforma com 10 créditos gratuitos - Só paga se gostar!",
      price: "$0",
      features: [
        "Creditos:10",
        "Todos os ativos de IA Desbloqueados",
        "10 gerações de imagens",
        "Geração de Textos",
      ],
    },
    {
      title: "Teste gratuito",
      credits: "10 créditos",
      text: "Explore o poder da nossa plataforma com 10 créditos gratuitos - Só paga se gostar!",
      price: "$0",
      features: [
        "Creditos:10",
        "Todos os ativos de IA Desbloqueados",
        "10 gerações de imagens",
        "Geração de Textos",
      ],
    },
    {
      title: "Teste gratuito",
      credits: "10 créditos",
      text: "Explore o poder da nossa plataforma com 10 créditos gratuitos - Só paga se gostar!",
      price: "$0",
      features: [
        "Creditos:10",
        "Todos os ativos de IA Desbloqueados",
        "10 gerações de imagens",
        "Geração de Textos",
      ],
    },
    {
      title: "Teste gratuito",
      credits: "10 créditos",
      text: "Explore o poder da nossa plataforma com 10 créditos gratuitos - Só paga se gostar!",
      price: "$0",
      features: [
        "Creditos:10",
        "Todos os ativos de IA Desbloqueados",
        "10 gerações de imagens",
        "Geração de Textos",
      ],
    },
  ];

  return (
    <div className="bottom-[-80px] flex flex-col relative bg-gradient-to-b from-[#269eff] via-[#269eff] to-white py-10 px-4 gap-6 justify-center max-w-7xl mx-auto rounded-3xl">
      <div className="flex flex-row items-center gap-5 absolute top-[-35px] left-[20px]">
        <div className="bg-[#004773] rounded-2xl flex items-center justify-center px-10 py-5 w-fit">
          <p className="text-white font-bold">Mensal</p>
        </div>
        <div className="bg-white rounded-2xl flex items-center justify-center px-10 py-5 w-fit">
          <p className="text-black font-bold">Anual (25% OFF)</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  pt-3 xl:grid-cols-4">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            text={plan.text}
            title={plan.title}
            credits={plan.credits}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
}
