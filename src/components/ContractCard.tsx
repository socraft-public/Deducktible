import { X } from "lucide-react";
import { InsuranceContract } from "../domain/InsuranceContract.tsx";
import { FC } from "react";

interface ContractCardProps {
  contract: InsuranceContract;
  removeContract: (contract: InsuranceContract) => void;
}

const ContractCard: FC<ContractCardProps> = ({ contract, removeContract }) => {
  return (
    <div className="contract">
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

export default ContractCard;
