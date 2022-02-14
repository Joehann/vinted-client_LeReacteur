import { Navigate } from "react-router-dom";
import { useState } from "react";
import Content from "../components/Publish/Content/Content";

const Publish = ({ token }) => {
  const [publish, setPublish] = useState();
  return token ? (
    <div>
      <Content publish={publish} setPublish={setPublish} />
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default Publish;
