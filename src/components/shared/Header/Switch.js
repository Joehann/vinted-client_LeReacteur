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
      <div class="button r" id="button-4">
        <input
          type="checkbox"
          class="checkbox"
          name="switch"
          onChange={handleClick}
        />
        <div class="knobs"></div>
        <div class="layer"></div>
      </div>
    </label>
    //   </div>
    // </div>
  );
};

export default Switch;
