import React, { createContext, FC, useContext, useState } from "react";
import { InsuranceContract } from "../domain/InsuranceContract.tsx";

interface ContractProviderProps {
  children: React.ReactNode;
}

interface ContractContextProps {
  contracts: InsuranceContract[];
  addContract: (name: string, deductible: number, premium: number) => void;
  removeContract: (contract: InsuranceContract) => void;
}

const ContractContext = createContext<ContractContextProps | undefined>(
  undefined,
);

const ContractProvider: FC<ContractProviderProps> = ({ children }) => {
  const [contracts, setContracts] = useState<InsuranceContract[]>([]);

  const addContract = (
    name: string,
    deductible: number,
    premium: number,
  ): void => {
    const randomHex = () => {
      const n = (Math.random() * 0xfffff * 1000000).toString(16);
      return "#" + n.slice(0, 6);
    };

    setContracts([
      ...contracts,
      {
        name,
        deductible: deductible,
        premium: premium,
        color: randomHex(),
      },
    ]);
  };

  const removeContract = (contract: InsuranceContract): void => {
    const updatedFranchises = [...contracts];
    const franchiseIndex = contracts.findIndex((f) => f.name === contract.name);

    updatedFranchises.splice(franchiseIndex, 1);

    setContracts(updatedFranchises);
  };

  return (
    <ContractContext.Provider
      value={{ contracts, addContract, removeContract }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export default ContractProvider;

export const useContract = (): ContractContextProps => {
  const contractContext = useContext(ContractContext);

  if (!contractContext) {
    throw new Error("You forgot to wrap your component in a ContractProvider");
  }

  return contractContext;
};
