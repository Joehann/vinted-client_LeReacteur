import { useState, useEffect } from "react";
import Hero from "../components/Home/Hero/Hero";
import Loader from "../components/shared/Loader/Loader";
import Content from "../components/Home/Content/Content";
import { fetchData } from "../functions/fetchData";
const Home = ({ search, sort, rangeValues }) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1); //state of the current pageNumber
  const limit = 10; //limits the number of items to display per page

  // This functions imported from the folder "functions"
  useEffect(() => {
    fetchData(
      `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}&sort=${sort}&page=${pageNumber}&limit=${limit}&priceMin=${rangeValues[0]}&priceMax=${rangeValues[1]}`,
      setData,
      setisLoading
    );
  }, [search, sort, pageNumber, rangeValues]);

  // Until the data arrives, display the loader
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
