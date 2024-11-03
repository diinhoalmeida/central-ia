import { FaSearch } from "react-icons/fa";

export function Banner() {
  return (
    <header
      className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16 px-6 text-center"
      role="banner"
    >
      <div className="flex flex-col items-center max-w-[960px] mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Pesquise pela Inteligência Artificial Desejada para Ter Acesso a
            Ferramentas, Tutoriais e Soluções
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            Encontre as melhores ferramentas para o seu negócio, desenvolva suas
            ideias e acelere seus resultados com IA.
          </p>
        </div>

        <form
          role="search"
          className="w-full max-w-3xl mb-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative w-full">
            <input
              type="search"
              placeholder="O QUE VOCÊ DESEJA FAZER?"
              aria-label="Pesquisar ferramentas de IA"
              className="w-full rounded-lg px-4 py-4 pr-18 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Realizar pesquisa"
            >
              Pesquisar
            </button>
          </div>
        </form>

        <nav
          aria-label="Pesquisas populares"
          className="mt-6 text-sm text-gray-200"
        >
          <span className="font-medium mr-2">Mais buscados: </span>
          <ul className="inline-flex flex-wrap gap-6">
            <li>
              <a
                href="#editor-imagens"
                className="flex items-center border border-white bg-transparent text-white font-semibold px-4 py-2 rounded-full transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <FaSearch className="w-4 h-4 mr-2" />
                Editor de Imagens
              </a>
            </li>
            <li>
              <a
                href="#editor-texto"
                className="flex items-center border border-white bg-transparent text-white font-semibold px-4 py-2 rounded-full transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <FaSearch className="w-4 h-4 mr-2" />
                Editor de Texto
              </a>
            </li>
            <li>
              <a
                href="#pesquisa-avancada"
                className="flex items-center  bg-transparent text-white font-semibold px-4 py-2 rounded-full transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <FaSearch className="w-4 h-4 mr-2" />
                Pesquisa Avançada
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
