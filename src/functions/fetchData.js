import axios from "axios";

//Fetch the data from DB and set the state Data
export const fetchData = async (url, setData, setIsLoading) => {
  const response = await axios.get(url);
  setData(response.data);
  setIsLoading(false);
};
