import { Input } from "antd";
import { Plus } from "lucide-react";
import { FC, useState } from "react";
import icon from "../assets/icon.svg";
import Chart from "../components/Chart";
import ContractCard from "../components/ContractCard.tsx";
import ContractPopup from "../components/ContractPopup.tsx";
import { useContract } from "../providers/ContractProvider.tsx";
import "../scss/pages/home.scss";

type HomeProps = object;

const Home: FC<HomeProps> = () => {
  const { contracts, removeContract } = useContract();
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const [estimatedAnnualCost, setEstimatedAnnualCost] = useState<number>(6000);

  return (
    <div className="page-container">
      <header>
        <img src={icon} className="icon" />
        <div className="text">
          <h2>Deducktible</h2>
          <span>Comparateur de franchises</span>
          <span>
            Développé par{" "}
            <a className="socraft" href="https://socraft.ch">
              socraft
            </a>
          </span>
        </div>
      </header>
      <div className="contracts">
        <div className="contract">
          <span className="name">Coût annuel estimé</span>
          <Input
            placeholder="12345"
            className="estimated-cost-input"
            type="number"
            value={estimatedAnnualCost}
            step={200}
            onChange={(e) => setEstimatedAnnualCost(e.target.valueAsNumber)}
          />
        </div>
        {contracts.map((contract, key) => (
          <ContractCard
            key={key}
            contract={contract}
            removeContract={removeContract}
          />
        ))}
        <button
          className="add-contract-button"
          onClick={() => setPopupOpen(true)}
        >
          <Plus size={46} />
        </button>
      </div>
      <Chart contracts={contracts} estimatedCost={estimatedAnnualCost ?? 0} />
      <ContractPopup open={popupOpen} setOpen={setPopupOpen} />
    </div>
  );
};

export default Home;
