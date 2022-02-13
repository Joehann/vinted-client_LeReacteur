import { useState, useEffect } from "react";
import Hero from "../components/Home/Hero/Hero";
import Loader from "../components/shared/Loader/Loader";
import Content from "../components/Home/Content/Content";
import { fetchData } from "../functions/fetchData";
const Home = ({ search }) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetchData(
      `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`,
      setData,
      setisLoading
    );
  }, [search]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <Hero />
      <Content data={data} />
    </div>
  );
};

export default Home;
