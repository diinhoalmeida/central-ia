import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function LoginModal({ isOpen, onClose }: ModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { handleLogin } = useAppContext();

  if (!isOpen) return null;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin(email, password, onClose, setError);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="dialog"
      aria-labelledby="login-modal-title"
      aria-describedby="login-modal-description"
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        role="document"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 id="login-modal-title" className="text-xl font-bold">
            Login
          </h2>
          <button
            onClick={onClose}
            aria-label="Fechar modal"
            className="text-gray-500 hover:text-gray-700"
          >
            &#10005;
          </button>
        </div>
        <form onSubmit={onSubmit} aria-describedby="login-form-description">
          <p id="login-modal-description" className="sr-only">
            Formulário para inserir as credenciais de login
          </p>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite seu email"
              required
              aria-required="true"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite sua senha"
              required
              aria-required="true"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-bold hover:bg-blue-700 transition duration-300"
            aria-label="Entrar na conta"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
