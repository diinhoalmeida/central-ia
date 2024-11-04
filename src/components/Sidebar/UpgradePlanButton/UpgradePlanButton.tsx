export function UpgradePlanButton() {
  return (
    <button 
      className="flex flex-row items-center gap-2 p-2 rounded hover:bg-slate-100 transition-colors"
      aria-label="Fazer upgrade do plano para ter mais acesso aos melhores recursos"
      type="button"
    >
      <div className="bg-colorMutedGray p-1 rounded-full" aria-hidden="true">
        <img
          src="src/assets/logo.png"
          alt=""
          className="w-10 h-10"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-ls font-semibold text-colorNeutralDarkGray">
          Fazer upgrade do plano
        </span>
        <span className="text-[13px] text-colorNeutralDarkGray">
          Mais acesso aos melhores recursos
        </span>
      </div>
    </button>
  );
}