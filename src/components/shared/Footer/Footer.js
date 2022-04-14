import "./footer.scss";
import { MdiGithub } from "../../Logos/Github";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">Johann Pouponnot @Le Reacteur - Andromeda 2022</div>
      <div className="right">
        <a href="https://github.com/Joehann" target="_blank">
          <MdiGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
