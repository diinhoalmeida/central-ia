import { useState } from "react";
import { HeaderHomePage } from "../../components/HeaderHomePage";
import { SidebarHome } from "../../components/SidebarHome";
import { Banner } from "../../components/Banner/Banner";
import { MainSection } from "../../components/MainSection";
import { WhoCanUse } from "../../components/WhoCanUse";
import { PricingPlans } from "../../components/PricingPlans";

export function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <main
      className="flex flex-col min-h-screen"
      role="main"
      aria-label="Página Principal"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-blue-600"
      >
        Pular para o conteúdo principal
      </a>

      <header role="banner">
        <HeaderHomePage onMenuClick={toggleSidebar} />
      </header>

      <div className="flex relative flex-1">
        {isSidebarVisible && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md-1:hidden"
            onClick={toggleSidebar}
            role="presentation"
            aria-hidden="true"
          />
        )}

        <aside
          role="complementary"
          aria-label="Menu lateral"
          className="h-full"
        >
          <SidebarHome
            isVisible={isSidebarVisible}
            onClose={toggleSidebar}
            aria-expanded={isSidebarVisible}
          />
        </aside>

        <div className="flex-1">
          <section role="region" aria-labelledby="main-highlight">
            <h2 id="main-highlight" className="sr-only">
              Destaque principal
            </h2>
            <Banner />
          </section>

          <section
            id="main-content"
            className="p-4"
            role="region"
            aria-labelledby="main-content-header"
          >
            <h2 id="main-content-header" className="sr-only">
              Conteúdo principal
            </h2>
            <MainSection />
          </section>

          <section
            role="region"
            className="p-4 from-blue-600 to-blue-500 max-w-[1280px] rounded-xl mx-auto bg-gradient-to-r relative top-[-50px]"
            aria-labelledby="who-can-use-header"
          >
            <h1 id="who-can-use-header" className="sr-only">
              Quem pode usar
            </h1>
            <WhoCanUse />
            <div className="max-w-7xl mx-auto text-white">
              <h2 className="font-medium text-3xl">Veja os resultados desde o primeiro dia.</h2>
              <h3 className="font-bold text-4xl">Preços que se pagam a si próprios.</h3>
            </div>
            <PricingPlans />
          </section>
        </div>
      </div>
    </main>
  );
}
