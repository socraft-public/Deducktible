import { Input } from "antd";
import { Plus } from "lucide-react";
import { FC, useState } from "react";
import icon from "../assets/icon.svg";
import Chart from "../components/Chart";
import FranchisePopup from "../components/FranchisePopup";
import { useFranchise } from "../providers/FranchiseProvider";
import "../scss/pages/home.scss";

type HomeProps = object;

const Home: FC<HomeProps> = () => {
  const { franchises } = useFranchise();
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const [estimatedAnnualCost, setEstimatedAnnualCost] = useState<number>();

  return (
    <div className="page-container">
      <header>
        <img src={icon} className="icon" />
        <div className="text">
          <h2>Deducktible</h2>
          <span>Comparateur de franchises</span>
        </div>
      </header>
      <Input
        placeholder="Coût estimé pour une année"
        className="estimated-cost-input"
        type="number"
        value={estimatedAnnualCost}
        onChange={(e) => setEstimatedAnnualCost(e.target.valueAsNumber)}
      />
      <div className="franchises">
        {franchises.map((franchise, key) => (
          <div
            style={{
              backgroundColor: franchise.color + "10",
              borderColor: franchise.color + "50",
            }}
            className="franchise"
            key={key}
          >
            <span className="name">{franchise.name}</span>
            <div className="infos">
              <span className="info">
                Franchise : CHF {franchise.franchise} .-
              </span>
              <span className="info">
                Prime annuelle : CHF {franchise.insurancePremium} .-
              </span>
            </div>
          </div>
        ))}
        <button
          className="add-franchise-button"
          onClick={() => setPopupOpen(true)}
        >
          <Plus size={46} />
        </button>
      </div>
      <Chart franchises={franchises} estimatedCost={estimatedAnnualCost ?? 0} />
      <FranchisePopup open={popupOpen} setOpen={setPopupOpen} />
    </div>
  );
};

export default Home;
