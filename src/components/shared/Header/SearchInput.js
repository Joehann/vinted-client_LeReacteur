import Glass from "../../../assets/img/glass.svg";

const SearchInput = ({ search, setSearch }) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <div className="header-search">
        <input
          type="text"
          placeholder="Recherche des articles"
          onChange={handleChange}
          value={search}
        />
        <img src={Glass} alt="magnifying glass" />
      </div>
    </div>
  );
};

export default SearchInput;
