import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import NotFound from "./pages/NotFound";
import Header from "./components/shared/Header/Header";
import Publish from "./pages/Publish";
import { useState } from "react";
import Cookies from "js-cookie";

function App() {
  //State to manage token
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  //State to manage SearchBar in the Header
  const [search, setSearch] = useState("");
  //State to manage sort switch button (ASC/DESC)
  const [sort, setSort] = useState("price-asc");

  return (
    <Router>
      <Header
        setSearch={setSearch}
        search={search}
        setSort={setSort}
        sort={sort}
        token={token}
        setToken={setToken}
      />

      <Routes>
        <Route path="/" element={<Home search={search} sort={sort} />}></Route>
        <Route path="/offer/:id" element={<Offer />}></Route>
        <Route path="/publish" element={<Publish token={token} />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
