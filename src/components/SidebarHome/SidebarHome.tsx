import { HTMLAttributes, forwardRef } from "react";
import { FaTools, FaGraduationCap } from "react-icons/fa";

interface SidebarHomeProps extends HTMLAttributes<HTMLElement> {
  isVisible?: boolean;
  onClose: () => void;
}

const SidebarHome = forwardRef<HTMLElement, SidebarHomeProps>(
  ({ isVisible, onClose, ...props }, ref) => {
    const toolItems = ["Ferramenta 1", "Ferramenta 2", "Ferramenta 3"];
    const blogItems = ["Blog 1", "Blog 2", "Blog 3"];

    return (
      <aside
        ref={ref}
        className={`fixed z-30 h-screen md-1:relative md-1:translate-x-0 transform top-0 left-0 w-[280px] md-1:w-[340px] flex md-1:hidden flex-col justify-between bg-gray-100 border-r border-gray-200 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        role="complementary"
        aria-label="Menu de navegação"
        {...props}
      >
        <div className="flex md-1:hidden justify-between items-center p-2 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="Fechar menu"
          >
            &times;
          </button>
        </div>

        <nav
          className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-gray-300"
          aria-label="Navegação principal"
        >
          <section className="mb-5 px-2">
            <div className="flex items-center space-x-2 mb-2">
              <FaTools className="text-gray-700" />
              <h2 className="text-xs font-semibold text-gray-800">
                Ferramentas
              </h2>
            </div>
            <ul className="space-y-3" role="list">
              {toolItems.map((item, index) => (
                <li key={index}>
                  <button
                    className="w-full text-left text-sm text-colorMediumGray hover:text-gray-900 transition-colors p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={`Abrir ${item}`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-5 px-2">
            <div className="flex items-center space-x-2 mb-2">
              <FaGraduationCap className="text-gray-700" />
              <h2 className="text-xs font-semibold text-gray-800">Blog</h2>
            </div>
            <ul className="space-y-3" role="list">
              {blogItems.map((item, index) => (
                <li key={index}>
                  <button
                    className="w-full text-left text-sm text-colorMediumGray hover:text-gray-900 transition-colors p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={`Abrir ${item}`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </nav>
      </aside>
    );
  }
);

SidebarHome.displayName = "SidebarHome";

export default SidebarHome;
