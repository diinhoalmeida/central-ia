import { useState } from "react";
import { FaGraduationCap, FaTools, FaBars } from "react-icons/fa";
import { StyledDropdownButton } from "../DropDownHome";
import { HeaderLogo } from "../HeaderLogo";
import { AuthButtons } from "../AuthButtons";
import { SearchBar } from "../SearchBar";

export function HeaderHomePage({ onMenuClick }: { onMenuClick: () => void }) {
  const [activeLink, setActiveLink] = useState<string>("Início");

  const options1 = ["Ferramenta 1", "Ferramenta 2", "Ferramenta 3"];
  const options2 = ["Blog 1", "Blog 2", "Blog 3"];

  const handleLinkClick = (label: string) => {
    setActiveLink(label);
  };

  const renderNavLink = (label: string) => (
    <div
      onClick={() => handleLinkClick(label)}
      className={`font-bold text-[15px] flex items-center justify-center min-w-fit text-colorMediumGray px-4 py-2 cursor-pointer hover:text-gray-900 ${
        activeLink === label ? "border-b-2 border-blue-600" : ""
      }`}
    >
      {label}
    </div>
  );

  return (
    <header className="bg-colorBaseWhite flex flex-col px-4 shadow-md z-10 sticky top-0 w-screen">
      <div className="flex items-center justify-between h-[90px]">
        <div className="flex flex-row items-center gap-10">
          <button
            onClick={onMenuClick}
            className="md-1:hidden p-2 hover:bg-gray-100 rounded-lg"
            aria-label="Abrir menu"
          >
            <FaBars className="text-colorMutedGray text-xl" />
          </button>

          <HeaderLogo />
          <div className="md-1:flex items-center space-x-4 hidden">
            <StyledDropdownButton
              label="Ferramentas"
              icon={<FaTools className="text-colorMutedGray" />}
              options={options1}
            />
            <StyledDropdownButton
              label="Blog"
              icon={<FaGraduationCap className="text-colorMutedGray" />}
              options={options2}
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <SearchBar />
          <AuthButtons />
        </div>
      </div>

      <nav className="flex overflow-x-auto mt-2 pt-2 text-sm text-gray-700 border-gray-300">
        <div className="flex justify-evenly flex-1 ">
          {renderNavLink("Início")}
          {renderNavLink("Em Alta")}
          {renderNavLink("Novos")}
          {renderNavLink("Top")}
        </div>

        <span className="border-l border-gray-300 min-h-6 mx-4"></span>

        <div className="flex justify-evenly flex-1">
          {renderNavLink("ChatGPT")}
          {renderNavLink("Midjourney")}
          {renderNavLink("Stable Diffusion")}
          {renderNavLink("OpenJourney")}
          {renderNavLink("Jasper")}
        </div>

        <span className="border-l border-gray-300 min-h-6 mx-4"></span>

        <div className="flex justify-evenly flex-1">
          {renderNavLink("Gerar Imagem")}
          {renderNavLink("Marketing")}
          {renderNavLink("Revisão de Texto")}
          {renderNavLink("Chatbots")}
        </div>
      </nav>
    </header>
  );
}