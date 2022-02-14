import "./hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="card">
          <h1>Prêts à faire du tri dans vos placards ?</h1>
          <Link to="publish">
            <button>Commencer à vendre</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
