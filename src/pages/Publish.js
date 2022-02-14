import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Content from "../components/Publish/Content/Content";
import axios from "axios";

const Publish = ({ token }) => {
  const [publish, setPublish] = useState({});
  console.log(publish);

  useEffect(() => {
    const saveData = async () => {
      try {
        if (publish.title) {
          const response = await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
            publish,
            {
              headers: {
                authorization: `Bearer ${token}`,
                // "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log("test");
          setPublish({});
          return response;
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    saveData();
  }, [publish, token]);

  return token ? (
    <div>
      <Content setPublish={setPublish} />
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default Publish;
