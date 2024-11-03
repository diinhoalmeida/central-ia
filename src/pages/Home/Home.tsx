import { useState } from "react";
import { HeaderHomePage } from "../../components/HeaderHomePage";
import { SidebarHome } from "../../components/SidebarHome";
import { Banner } from "../../components/Banner/Banner";

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

      <HeaderHomePage onMenuClick={toggleSidebar} />

      <div className="flex relative flex-1">
        {isSidebarVisible && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md-1:hidden"
            onClick={toggleSidebar}
            role="presentation"
            aria-hidden="true"
          />
        )}

        <nav role="navigation" aria-label="Menu lateral" className="h-full">
          <SidebarHome
            isVisible={isSidebarVisible}
            onClose={toggleSidebar}
            aria-expanded={isSidebarVisible}
          />
        </nav>

        <div className="flex-1">
          <section role="region" aria-label="Destaque principal">
            <Banner />
          </section>

          {/* <section
            id="main-content"
            className="p-4"
            role="region"
            aria-label="Conteúdo principal"
          >
          </section> */}
        </div>
      </div>
    </main>
  );
}