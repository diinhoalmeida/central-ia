import { HTMLAttributes } from "react";
import { FiMenu } from "react-icons/fi";
import { CreditsDisplayButton } from "../CreditsDisplayButton";
import { UserAvatar } from "./UserAvatar";
import { SelectButton } from "../SelectButton";
import { useAppContext } from "../../context/AppContext";
import { HeaderLogo } from "../HeaderLogo";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick, ...props }: HeaderProps) {
  const { iaOption, handleSelectIa } = useAppContext();

  const aiOptions = ["ChatGPT", "Bard", "Claude", "Jasper"];

  return (
    <header
      role="banner"
      aria-label="Cabeçalho principal"
      className="bg-colorBaseWhite flex items-center justify-between p-4 md-1:p-5 shadow-md z-10 sticky top-0 h-[90px]"
      {...props}
    >
      <HeaderLogo />

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
