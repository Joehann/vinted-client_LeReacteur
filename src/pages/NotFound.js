import "./not-found.scss";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oups ! Cette page n'existe pas</h1>
      <Link to="/">
        <button>Retour à l'accueil</button>
      </Link>
    </div>
  );
};

export default NotFound;
