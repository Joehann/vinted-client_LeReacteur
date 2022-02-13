import "./hero.scss";
import HeroImg from "../../../assets/img/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="card">
          <h1>Prêts à faire du tri dans vos placards ?</h1>
          <button>Commencer à vendre</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
