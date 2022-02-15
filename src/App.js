import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import NotFound from "./pages/NotFound";
import Header from "./components/shared/Header/Header";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";
import { useState } from "react";
import Cookies from "js-cookie";

function App() {
  //State to manage token
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  //State to manage SearchBar in the Header
  const [search, setSearch] = useState("");
  //State to manage sort switch button (ASC/DESC)
  const [sort, setSort] = useState("price-asc");
  //State to hide/show modals with overlay
  const [toggleModal, setToggleModal] = useState("hidden");
  //State to choose the content of a modal
  const [modalName, setModalName] = useState("");
  //State of Range values in the header
  const [rangeValues, setRangeValues] = useState([0, 1000]);
  // console.log(rangeValues);

  return (
    <Router>
      <Header
        setSearch={setSearch}
        search={search}
        setSort={setSort}
        sort={sort}
        token={token}
        setToken={setToken}
        setToggleModal={setToggleModal}
        setModalName={setModalName}
        toggleModal={toggleModal}
        modalName={modalName}
        setRangeValues={setRangeValues}
        rangeValues={rangeValues}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home search={search} sort={sort} rangeValues={rangeValues} />
          }
        ></Route>
        <Route path="/offer/:id" element={<Offer />}></Route>
        <Route
          path="/publish"
          element={
            <Publish
              token={token}
              setToggleModal={setToggleModal}
              setModalName={setModalName}
            />
          }
        ></Route>
        <Route
          path="/payment"
          element={
            <Payment
              token={token}
              setToggleModal={setToggleModal}
              setModalName={setModalName}
            />
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
