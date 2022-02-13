import { useState, useEffect } from "react";
import Hero from "../components/Home/Hero/Hero";
import Loader from "../components/shared/Loader/Loader";
import Content from "../components/Home/Content/Content";
import { fetchData } from "../functions/fetchData";
const Home = ({ search, sort }) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetchData(
      `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}&sort=${sort}`,
      setData,
      setisLoading
    );
  }, [search, sort]);

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
