import "./paginate.scss";
const Paginate = ({ data, setPageNumber, limit, pageNumber }) => {
  console.log(pageNumber);
  let numberOfPages = Math.floor(data.count / limit);
  // console.log(numberOfPages);
  data.count % limit > 0 && numberOfPages++;
  // console.log(numberOfPages);
  const pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }
  // console.log(pages);

  const handleClick = (index) => {
    // console.log(index + 1);
    setPageNumber(index + 1);
  };
  return (
    <div className="paginate">
      {pages.map((item, index) => {
        return (
          <div
            key={index}
            className={index + 1 === pageNumber ? "active" : ""}
            onClick={() => {
              handleClick(index);
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Paginate;
