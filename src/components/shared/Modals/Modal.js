import "./modal.scss";
import Signup from "../Forms/Signup";
import Login from "../Forms/Login";

const Modal = ({ toggleModal, setToggleModal, modalName, token, setToken }) => {
  return (
    <div className={`modal ${toggleModal}`}>
      <div
        className="overlay"
        onClick={() => {
          setToggleModal("hidden");
        }}
      ></div>
      {modalName === "login" && (
        <div className="card">
          <Login
            token={token}
            setToken={setToken}
            setToggleModal={setToggleModal}
          />
        </div>
      )}
      {modalName === "signup" && (
        <div className="card">
          <Signup
            token={token}
            setToken={setToken}
            setToggleModal={setToggleModal}
          />
        </div>
      )}
    </div>
  );
};

export default Modal;
