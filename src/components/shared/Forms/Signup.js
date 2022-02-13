import "./form.scss";
import { useState } from "react";
import axios from "axios";
import Input from "../Inputs/Input";
import { useNavigate } from "react-router-dom";
import { setUserToken } from "../../../functions/userToken";

const Signup = ({ setToken, setToggleModal }) => {
  const [emailInput, setEmailInput] = useState({
    type: "text",
    placeholder: "Email",
    value: "",
  });
  const [usernameInput, setUsernameInput] = useState({
    type: "text",
    placeholder: "Nom d'utilisateur",
    value: "",
  });
  const [passwordInput, setPasswordInput] = useState({
    type: "password",
    placeholder: "Mot de passe",
    value: "",
  });
  const navigate = useNavigate();

  //Try to signup the user. If it's right, set the token in cookie and navigate to ('/')
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = {
        email: emailInput.value,
        username: usernameInput.value,
        password: passwordInput.value,
        newsletter: true,
      };

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        user
      );

      const token = response.data.token;

      setUserToken(navigate, token, setToken);
      setToggleModal("hidden");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form-content">
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit}>
        <Input input={usernameInput} setInput={setUsernameInput} />
        <Input input={emailInput} setInput={setEmailInput} />
        <Input input={passwordInput} setInput={setPasswordInput} />

        <p>
          "En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans."
        </p>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Signup;
