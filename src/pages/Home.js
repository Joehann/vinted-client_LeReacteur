import { useState, useEffect } from "react";
import Hero from "../components/Home/Hero/Hero";
import Loader from "../components/shared/Loader/Loader";
import Content from "../components/Home/Content/Content";
import { fetchData } from "../functions/fetchData";
const Home = ({ search, sort }) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const limit = 5;

  useEffect(() => {
    fetchData(
      `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}&sort=${sort}&page=${pageNumber}&limit=${limit}`,
      setData,
      setisLoading
    );
  }, [search, sort, pageNumber]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <Hero />
      <Content
        data={data}
        setPageNumber={setPageNumber}
        limit={limit}
        pageNumber={pageNumber}
      />
    </div>
  );
};

export default Home;
