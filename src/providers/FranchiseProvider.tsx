import React, { createContext, FC, useContext, useState } from "react";

interface FranchiseProviderProps {
  children: React.ReactNode;
}

interface FranchiseContextProps {
  franchises: {
    name: string;
    color: string;
    franchise: number;
    insurancePremium: number;
  }[];
  addFranchise: (
    name: string,
    franchise: number,
    insurancePremium: number,
  ) => void;
}

const FranchiseContext = createContext<FranchiseContextProps | undefined>(
  undefined,
);

const FranchiseProvider: FC<FranchiseProviderProps> = ({ children }) => {
  const [franchises, setFranchises] = useState<
    {
      name: string;
      color: string;
      franchise: number;
      insurancePremium: number;
    }[]
  >([]);

  const addFranchise = (
    name: string,
    franchise: number,
    insurancePremium: number,
  ): void => {
    const randomHex = () => {
      const n = (Math.random() * 0xfffff * 1000000).toString(16);
      return "#" + n.slice(0, 6);
    };

    setFranchises([
      ...franchises,
      {
        name,
        franchise,
        insurancePremium,
        color: randomHex(),
      },
    ]);
  };

  return (
    <FranchiseContext.Provider value={{ franchises, addFranchise }}>
      {children}
    </FranchiseContext.Provider>
  );
};

export default FranchiseProvider;

export const useFranchise = (): FranchiseContextProps => {
  const franchiseContext = useContext(FranchiseContext);

  if (!franchiseContext) {
    throw new Error("You forgot to wrap your component in a FranchiseProvider");
  }

  return franchiseContext;
};
