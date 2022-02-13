import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/shared/Loader/Loader";
import Content from "../components/Offer/Content/Content";
import { fetchData } from "../functions/fetchData";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  // This functions imported from the folder "functions"
  useEffect(() => {
    fetchData(
      `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`,
      setData,
      setisLoading
    );
  }, [id]);

  // Until the data arrives, display the loader
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <Content data={data} />
    </div>
  );
};

export default Offer;
