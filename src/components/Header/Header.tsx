import { HTMLAttributes } from "react";
import { FiMenu } from "react-icons/fi";
import { CreditsDisplayButton } from "../CreditsDisplayButton";
import { UserAvatar } from "../UserAvatar";
import { SelectButton } from "../ChatArea/SelectButton";
import { useAppContext } from "../../context/AppContext";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  appName?: string;
  logoSrc?: string;
  onMenuClick?: () => void;
}

export function Header({
  appName = "Central IA",
  logoSrc = "src/assets/logo.png",
  onMenuClick,
  ...props
}: HeaderProps) {
  // Usando o contexto
  const { iaOption, handleSelectIa } = useAppContext();

  const aiOptions = ["ChatGPT", "Bard", "Claude", "Jasper"];

  return (
    <header
      role="banner"
      aria-label="Cabeçalho principal"
      className="bg-colorBaseWhite flex items-center justify-between p-4 md-1:p-5 shadow-md z-10 sticky top-0 h-[90px]"
      {...props}
    >
      <div className="hidden md-1:flex items-center gap-3">
        <a
          href="/"
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          aria-label="Ir para página inicial"
        >
          <div className="bg-[#004773] p-1 rounded-full" aria-hidden="true">
            <img
              src={logoSrc}
              alt="Logo da aplicação"
              width={56}
              height={56}
              className="w-14 h-14"
              loading="lazy"
            />
          </div>
          <h1 className="text-lg md-1:text-2xl font-bold text-slate-900">
            {appName}
          </h1>
        </a>
      </div>

      <button
        className="md-1:hidden text-2xl text-slate-900 p-2"
        onClick={onMenuClick}
        aria-label="Abrir menu de navegação"
      >
        <FiMenu />
      </button>

      <SelectButton
        type="ia"
        label={iaOption}
        options={aiOptions}
        onSelect={handleSelectIa}
        showBorder={false}
        ariaLabel="Choose a ia"
        description="List of available ia"
      />

      <nav
        className="flex items-center gap-2 md-1:gap-3"
        aria-label="Menu do usuário"
      >
        <CreditsDisplayButton />
        <UserAvatar />
      </nav>
    </header>
  );
}
