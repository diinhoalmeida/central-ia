import React from "react";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

interface ProtectedRouteProps {
  redirectTo: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectTo,
}) => {
  const { isLoggedIn } = useAppContext();

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Usuário não está logado</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => (window.location.href = redirectTo)}
        >
          Ir para o início
        </button>
      </div>
    );
  }

  return <Outlet />;
};
