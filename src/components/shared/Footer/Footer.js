import "./footer.scss";
import { MdiGithub } from "../../Logos/Github";
import { BrandicoLinkedinRect } from "../../Logos/Linkedin";
import { IcBaselineAlternateEmail } from "../../Logos/Mail";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">Johann Pouponnot @Le Reacteur - Andromeda 2022</div>
      <div className="right">
        <MdiGithub />
        <BrandicoLinkedinRect />
        <IcBaselineAlternateEmail />
      </div>
    </div>
  );
};

export default Footer;
