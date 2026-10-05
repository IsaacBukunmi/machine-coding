const Pagination = ({
  totalProducts,
  currentPage,
  setCurrentPage,
  pageSize,
}) => {
  const totalNumberOfPages = Math.ceil(totalProducts / pageSize);
  const pageNumbers = [...Array(totalNumberOfPages).keys()];

  const handleNextPage = () => {
    if (currentPage < totalNumberOfPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
    return;
  };
  const handlePrevPage = () => {
    if (currentPage != 0) {
      setCurrentPage((prev) => prev - 1);
    }
    return;
  };
  return (
    <div className="page-number-ctn">
      <button
        id="previous"
        onClick={() => handlePrevPage()}
        disabled={currentPage === 0}
      >
        {" "}
        {"<<"}{" "}
      </button>
      {pageNumbers.map((n) => (
        <button
          key={n}
          className={`number-btn ${currentPage === n ? `active` : ""}`}
          onClick={() => setCurrentPage(n)}
        >
          {n + 1}
        </button>
      ))}
      <button
        id="next"
        onClick={() => handleNextPage()}
        disabled={currentPage === totalNumberOfPages - 1}
      >
        {" "}
        {">>"}{" "}
      </button>
    </div>
  );
};

export default Pagination;
