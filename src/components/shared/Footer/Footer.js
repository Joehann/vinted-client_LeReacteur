import "./footer.scss";
import { MdiGithub } from "../../Logos/Github";
import { BrandicoLinkedinRect } from "../../Logos/Linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">Johann Pouponnot @Le Reacteur - Andromeda 2022</div>
      <div className="right">
        <MdiGithub />
        <BrandicoLinkedinRect />
      </div>
    </div>
  );
};

export default Footer;
