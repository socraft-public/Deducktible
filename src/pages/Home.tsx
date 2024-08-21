import { FC } from "react";
import icon from "../assets/icon.svg";
import "../scss/pages/home.scss";

type HomeProps = object;

const Home: FC<HomeProps> = () => {
  return (
    <div className="page-container">
      <header>
        <img className="icon" src={icon} />
        <h1>Deducktible is under development !</h1>
      </header>
    </div>
  );
};

export default Home;
