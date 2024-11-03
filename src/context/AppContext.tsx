import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  iaOption: string;
  setIaOption: (option: string) => void;
  categoryOption: string;
  setCategoryOption: (option: string) => void;
  handleSelectIa: (option: string) => void;
  handleSelectCategory: (option: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [iaOption, setIaOption] = useState<string>("ChatGPT");
  const [categoryOption, setCategoryOption] =
    useState<string>("Desenvolvimento");

  const handleSelectIa = (option: string) => {
    setIaOption(option);
  };

  const handleSelectCategory = (option: string) => {
    setCategoryOption(option);
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
