import { FC } from "react";
import logo_socraft from "../assets/logo-noir-BD-socraft.png";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer>
      <h4>Developed by&nbsp;</h4>
      <a href="https://www.socraft.ch/">
        <img className="socraft" src={logo_socraft} />
      </a>
    </footer>
  );
};
export default Footer;
