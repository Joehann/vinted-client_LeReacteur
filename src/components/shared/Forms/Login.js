import "./form.scss";
import { useState } from "react";
import axios from "axios";
import Input from "../Inputs/Input";
import { useNavigate } from "react-router-dom";
import { setUserToken } from "../../../functions/userToken";

const Login = ({ setToken, setToggleModal }) => {
  const [emailInput, setEmailInput] = useState({
    type: "text",
    placeholder: "Email",
    value: "",
  });
  const [passwordInput, setPasswordInput] = useState({
    type: "password",
    placeholder: "Mot de passe",
    value: "",
  });

  const navigate = useNavigate();

  //On submit try to login the user and if it's right, set the token as a cookie and navigate to ('/')
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userInfos = {
        email: emailInput.value,
        password: passwordInput.value,
      };

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        userInfos
      );
      const token = response.data.token;
      setUserToken(navigate, token, setToken);
      setToggleModal("hidden");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form-content">
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
        <Input input={emailInput} setInput={setEmailInput} />
        <Input input={passwordInput} setInput={setPasswordInput} />

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Login;
