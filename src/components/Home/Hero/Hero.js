import "./hero.scss";
import HeroImg from "../../../assets/img/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={HeroImg} alt="hero" />
    </div>
  );
};

export default Hero;
