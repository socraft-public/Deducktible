import { X } from "lucide-react";
import { InsuranceContract } from "../domain/InsuranceContract.tsx";

export const ContractCard = (
  key: string,
  contract: InsuranceContract,
  removeContract: (contract: InsuranceContract) => void,
) => {
  return (
    <div className="contract" key={key}>
      <div className="name">
        <span className="text">
          <span
            className="color"
            style={{ backgroundColor: contract.color }}
          ></span>
          {contract.name}
        </span>
        <X className="delete" onClick={() => removeContract(contract)} />
      </div>
      <div className="infos">
        <span className="info">Franchise : CHF {contract.deductible} .-</span>
        <span className="info">
          Prime mensuelle : CHF {contract.premium / 12} .-
        </span>
      </div>
    </div>
  );
};
