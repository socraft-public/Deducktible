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

  return (
    <div className="page-container">
      <header>
        <img src={icon} className="icon" />
        <div className="text">
          <h2>Deducktible</h2>
          <span>Comparateur de franchises LAMal</span>
        </div>
      </header>
      <div className="instructions">
        <p>
          Comparez le coût de revient réel suivant différentes franchises et
          primes LAMal.
        </p>
        <p>
          Ajoutez les contrats que vous souhaitez visualiser en cliquant sur le
          +
        </p>
      </div>
      <div className="contracts">
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
      <div className="instructions">
        <p>
          En estimant vos frais médicaux de l’année (horizontal), vous trouverez
          vos coûts effectifs suivant le contrat (vertical).
        </p>
        <p>
          Optimiser le choix de sa franchise revient à rester sur la ligne la
          plus basse. En général seules les franchises à 300.– et 2’500.– le
          permettent.
        </p>
      </div>
      <Chart contracts={contracts} />
      <footer>
        <div className="text">
          <span>
            Développé par{" "}
            <a
              className="socraft"
              href="https://socraft.ch"
              target="_blank"
              rel="noreferrer"
            >
              socraft
            </a>
          </span>
        </div>
      </footer>
      <ContractPopup open={popupOpen} setOpen={setPopupOpen} />
    </div>
  );
};

export default Home;
