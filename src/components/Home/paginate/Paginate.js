import "./paginate.scss";
const Paginate = ({ data, setPageNumber, limit, pageNumber }) => {
  //Calculate the number of pages based on the limit
  let numberOfPages = Math.floor(data.count / limit);
  data.count % limit > 0 && numberOfPages++;
  //Create an array of each pages
  const pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  //Set the page number in the state
  const handleClick = (index) => {
    setPageNumber(index + 1);
  };
  return (
    <div className="paginate">
      {pages.map((item, index) => {
        return (
          <button
            key={index}
            //Add the class "active" on the current page number
            className={index + 1 === pageNumber ? "active" : ""}
            onClick={() => {
              handleClick(index);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Paginate;
