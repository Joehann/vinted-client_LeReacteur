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
    // Switch button for sort the results of the items research
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
  );
};

export default Switch;
