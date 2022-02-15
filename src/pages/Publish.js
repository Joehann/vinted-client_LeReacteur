import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Content from "../components/Publish/Content/Content";
import axios from "axios";

const Publish = ({ token, setToggleModal, setModalName }) => {
  const [publish, setPublish] = useState({});
  const navigate = useNavigate();
  // console.log(publish);

  useEffect(() => {
    const saveData = async () => {
      const formData = new FormData();
      formData.append("title", publish.title);
      formData.append("description", publish.description);
      formData.append("price", publish.price);
      formData.append("condition", publish.condition);
      formData.append("city", publish.city);
      formData.append("brand", publish.brand);
      formData.append("size", publish.size);
      formData.append("color", publish.color);
      formData.append("picture", publish.picture);

      try {
        if (publish.title) {
          const response = await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            }
          );
          if (response.data._id) {
            navigate(`/offer/${response.data._id}`);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    saveData();
  }, [publish, token, navigate]);

  return token ? (
    <div>
      <Content setPublish={setPublish} />
    </div>
  ) : (
    <Navigate
      to="/"
      modalName={setModalName("login")}
      toggleModal={setToggleModal("show")}
    />
  );
};

export default Publish;
