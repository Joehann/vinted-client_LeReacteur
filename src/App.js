import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
// import NotFound from "./pages/NotFound";
import Header from "./components/shared/Header/Header";
import { useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header
        setSearch={setSearch}
        search={search}
        token={token}
        setToken={setToken}
      />

      <Routes>
        <Route path="/" element={<Home search={search} />}></Route>
        <Route path="/offer/:id" element={<Offer />}></Route>
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
