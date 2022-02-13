import Cookies from "js-cookie";

//This two functions allow to set and remove the token as cookie

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
