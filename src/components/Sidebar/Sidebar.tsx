import { HTMLAttributes, forwardRef } from "react";
import { HelpButton } from "./HelpButton/HelpButton";
import { UpgradePlanButton } from "./UpgradePlanButton/UpgradePlanButton";

interface ChatHistoryItem {
  id: string;
  title: string;
  onClick?: () => void;
}

interface ChatHistorySection {
  title: string;
  items: ChatHistoryItem[];
}

interface SidebarProps extends HTMLAttributes<HTMLElement> {
  sections?: ChatHistorySection[];
  isVisible?: boolean;
  onClose: () => void;
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({ sections, isVisible, onClose, ...props }, ref) => {
    const defaultSections: ChatHistorySection[] = [
      {
        title: "Ontem",
        items: [
          { id: "1", title: "Sugestões de melhorias para otimizar..." },
          { id: "2", title: "Como criar testes unitários para View..." },
          { id: "3", title: "Exemplos de como usar MotionLayout..." },
        ],
      },
      {
        title: "7 dias anteriores",
        items: [
          { id: "4", title: "Sugestões de melhorias para otimizar..." },
          { id: "5", title: "Como criar testes unitários para View..." },
          { id: "6", title: "Exemplos de como usar MotionLayout..." },
        ],
      },
    ];

    const historySections = sections || defaultSections;

    return (
      <aside
        ref={ref}
        className={`fixed z-30 h-screen md-1:relative md-1:translate-x-0 transform top-0 left-0 w-[280px] md-1:w-[340px] md-1:max-h-[calc(100vh-90px)] flex flex-col justify-between bg-gray-100 border-r border-gray-200 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        role="complementary"
        aria-label="Histórico de conversas"
        {...props}
      >
        <div className="flex md-1:hidden justify-between items-center p-2 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Histórico</h2>
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
          aria-label="Navegação do histórico de conversas"
        >
          {historySections.map((section) => (
            <section key={section.title} className="mb-5 px-2">
              <h2 className="text-xs font-semibold text-gray-800 mb-2">
                {section.title}
              </h2>
              <ul className="space-y-3" role="list">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={item.onClick}
                      className="w-full text-left text-sm text-colorMediumGray hover:text-gray-900 transition-colors p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      aria-label={`Abrir conversa: ${item.title}`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>

        <footer className="border-t border-gray-200">
          <HelpButton />
          <div className="p-2 border-t border-gray-200">
            <UpgradePlanButton />
          </div>
        </footer>
      </aside>
    );
  }
);

Sidebar.displayName = "Sidebar";
