import { CreditsDisplayButton } from "../CreditsDisplayButton";
import { UserAvatar } from "../UserAvatar";

export function Header() {
  return (
    <header className="bg-colorBaseWhite flex flex-row items-center justify-between p-5 shadow-[0px_1px_4px_rgba(0,0,0,0.16)]">
        <h1>Central IA</h1>
      <div className="flex flex-row items-center gap-3">
        <CreditsDisplayButton />
        <UserAvatar />
      </div>
    </header>
  );
}
