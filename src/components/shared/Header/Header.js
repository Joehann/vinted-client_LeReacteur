import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../assets/img/logo.svg";
import Modal from "../Modals/Modal";
import { useState } from "react";
import SearchInput from "./SearchInput";
import { removeToken } from "../../../functions/userToken";
import Switch from "./Switch";
// import Range from "./Range";

const Header = ({ token, setToken, setSearch, search, setSort, sort }) => {
  const navigate = useNavigate();
  const [toggleModal, setToggleModal] = useState("hidden");
  const [modalName, setModalName] = useState("");

  return (
    <header>
      {/* Modal for login and signup */}
      <Modal
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        modalName={modalName}
        token={token}
        setToken={setToken}
      />
      <div className="container">
        <Link to="/">
          <div className="brand">
            <img src={Logo} alt="logo" />
          </div>
        </Link>
        <div className="filters">
          <SearchInput search={search} setSearch={setSearch} />
          <Switch sort={sort} setSort={setSort} label="Trier par prix :" />
          {/* <Range /> */}
        </div>

        {token ? (
          <div className="buttons">
            <button
              className="logout-btn"
              onClick={() => {
                removeToken(navigate, setToken);
              }}
            >
              Se déconnecter
            </button>
          </div>
        ) : (
          <div className="buttons">
            <button
              className="sign-up-btn"
              onClick={() => {
                setModalName("signup");
                setToggleModal("show");
                navigate("/");
              }}
            >
              S'inscrire
            </button>

            <button
              onClick={() => {
                setModalName("login");
                setToggleModal("show");
              }}
            >
              Se connecter
            </button>
          </div>
        )}
        <button className="sold-btn">Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;