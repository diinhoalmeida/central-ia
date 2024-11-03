export function AuthButtons() {
  return (
    <div className="flex items-center space-x-4">
      <button
        className="bg-white text-colorMutedGray font-bold px-4 py-2 rounded-xl transition duration-300 ease-in-out hover:bg-gray-300"
        aria-label="Cadastrar nova conta"
      >
        Cadastrar
      </button>
      <button
        className="bg-darkGray text-white px-4 font-bold py-2 rounded-xl transition duration-300 ease-in-out hover:bg-gray-700"
        aria-label="Entrar na conta"
      >
        Entrar
      </button>
    </div>
  );
}
