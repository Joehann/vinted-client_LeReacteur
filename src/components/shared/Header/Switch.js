import "./switch.scss";
const Switch = ({ setSort, sort, label }) => {
  const handleClick = () => {
    if (sort === "price-asc") {
      setSort("price-desc");
    } else {
      setSort("price-asc");
    }
  };
  return (
    // <div class="toggle-button-cover">
    //   <div class="button-cover">

    <label htmlFor="switch">
      {label}
      <div className="button r" id="button-4">
        <input
          type="checkbox"
          className="checkbox"
          name="switch"
          onChange={handleClick}
        />
        <div className="knobs"></div>
        <div className="layer"></div>
      </div>
    </label>
    //   </div>
    // </div>
  );
};

export default Switch;
