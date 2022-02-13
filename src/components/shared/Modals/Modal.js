import "./modal.scss";
import Signup from "../Forms/Signup";
import Login from "../Forms/Login";

const Modal = ({ toggleModal, setToggleModal, modalName, token, setToken }) => {
  return (
    <div className={`modal ${toggleModal}`}>
      {/* Hide the modal on click on the overlay (outside of the card) */}
      <div
        className="overlay"
        onClick={() => {
          setToggleModal("hidden");
        }}
      >
        {/* The content of the card depends of the button clicked by the user */}
      </div>
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
