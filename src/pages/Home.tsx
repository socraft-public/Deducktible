import { Input } from "antd";
import { Plus, X } from "lucide-react";
import { FC, useState } from "react";
import icon from "../assets/icon.svg";
import Chart from "../components/Chart";
import FranchisePopup from "../components/FranchisePopup";
import { useFranchise } from "../providers/FranchiseProvider";
import "../scss/pages/home.scss";

type HomeProps = object;

const Home: FC<HomeProps> = () => {
  const { franchises, removeFranchise } = useFranchise();
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
            <span
              onClick={() => window.open("https://socraft.ch")}
              className="socraft"
            >
              socraft
            </span>
          </span>
        </div>
      </header>
      <div className="franchises">
        <div className="franchise">
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
        {franchises.map((franchise, key) => (
          <div className="franchise" key={key}>
            <div className="name">
              <span className="text">
                <span
                  className="color"
                  style={{ backgroundColor: franchise.color }}
                ></span>
                {franchise.name}
              </span>
              <X
                className="delete"
                onClick={() => removeFranchise(franchise)}
              />
            </div>
            <div className="infos">
              <span className="info">
                Franchise : CHF {franchise.franchise} .-
              </span>
              <span className="info">
                Prime mensuelle : CHF {franchise.insurancePremium / 12} .-
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
