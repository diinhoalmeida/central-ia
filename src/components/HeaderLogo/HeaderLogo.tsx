interface HeaderLogoProps {
  logoSrc?: string;
  appName?: string;
}

export function HeaderLogo({
  logoSrc = "src/assets/logo.png",
  appName = "Central IA",
}: HeaderLogoProps) {
  return (
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
  );
}
