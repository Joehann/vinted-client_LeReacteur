import Cookies from "js-cookie";

export const setUserToken = (navigate, token, setToken) => {
  Cookies.set("userToken", token, { expires: 30 });
  setToken(token);
  navigate("/");
};

export const removeToken = (navigate, setToken) => {
  setToken(null);
  Cookies.remove("userToken");
  navigate("/");
};
