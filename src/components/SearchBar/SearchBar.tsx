import { FaSearch } from "react-icons/fa";

export function SearchBar() {
  return (
    <div className="ls-1:flex hidden items-center relative">
      <FaSearch className="absolute left-2 text-gray-500" aria-hidden="true" />
      <input
        type="search"
        placeholder="Buscar IA"
        className="pl-8 pr-4 py-2 rounded-xl bg-borderPromptSuggestion"
        aria-label="Buscar inteligência artificial"
      />
    </div>
  );
}
