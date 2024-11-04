import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebaseConfig";

interface AppContextType {
  iaOption: string;
  setIaOption: (option: string) => void;
  categoryOption: string;
  setCategoryOption: (option: string) => void;
  handleSelectIa: (option: string) => void;
  handleSelectCategory: (option: string) => void;
  handleLogout: () => void;
  setIsLoggedIn: (option: boolean) => void;
  isLoggedIn: boolean;
  handleLogin: (
    email: string,
    password: string,
    onClose: () => void,
    setError: React.Dispatch<React.SetStateAction<string | null>>
  ) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [iaOption, setIaOption] = useState<string>("ChatGPT");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [categoryOption, setCategoryOption] =
    useState<string>("Desenvolvimento");

  const navigate = useNavigate(); 

  const handleSelectIa = (option: string) => {
    setIaOption(option);
  };

  const handleSelectCategory = (option: string) => {
    setCategoryOption(option);
  };

  const handleLogin = async (
    email: string,
    password: string,
    onClose: () => void,
    setError: React.Dispatch<React.SetStateAction<string | null>>
  ): Promise<void> => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = userCredential.user.uid;
      localStorage.setItem(`email`, email);
      localStorage.setItem(`userId`, userId);
      setIsLoggedIn(true);
      alert("Login bem-sucedido!");
      onClose();
      navigate("/chat");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(`Erro ao fazer login: ${err.message}`);
      } else {
        setError("Erro ao fazer login: erro desconhecido.");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    alert("Logout bem-sucedido!");
    navigate("/home");
  };

  return (
    <AppContext.Provider
      value={{
        iaOption,
        setIaOption,
        categoryOption,
        setCategoryOption,
        handleSelectIa,
        handleSelectCategory,
        handleLogin,
        handleLogout,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
