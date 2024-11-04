import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type SingUpModal = {
  isOpen: boolean;
  onClose: (value: boolean) => void;
};

export default function SignupModal({ isOpen, onClose }: SingUpModal) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          role="dialog"
          aria-labelledby="signup-title"
          aria-describedby="signup-description"
        >
          <div
            className="bg-white rounded-lg p-8 max-w-md w-full"
            role="document"
          >
            <div className="w-full flex flex-row justify-between items-center">
              <h2 id="signup-title" className="text-2xl font-bold mb-4">
                Cadastro
              </h2>
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => onClose(false)}
                  aria-label="Fechar modal"
                  className="text-gray-500 hover:text-gray-700"
                >
                  &#10005;
                </button>
              </div>
            </div>

            <form aria-label="Formulário de cadastro">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Digite seu email"
                  aria-required="true"
                  required
                />
              </div>

              <div className="mb-4 relative">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Senha
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Digite sua senha"
                  aria-required="true"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="mb-6 relative">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="confirm-password"
                >
                  Confirmar Senha
                </label>
                <input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Confirme sua senha"
                  aria-required="true"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={
                    showConfirmPassword
                      ? "Esconder confirmação de senha"
                      : "Mostrar confirmação de senha"
                  }
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <button
                type="submit"
                className="bg-primary text-white font-bold px-4 py-2 rounded-xl w-full mb-4"
                aria-label="Registrar conta"
              >
                Registrar
              </button>
              <button
                type="button"
                onClick={() => onClose(false)}
                className="text-red-500 hover:underline"
                aria-label="Fechar modal de cadastro"
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
