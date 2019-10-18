import React from "react";
import API from "../utils/API.js";
function CardResult({ books, filterSearch, book }) {
  const handleClick = e => {
    e.preventDefault();
    const bookid = e.target.id;
    API.saveBook(books.filter(book => book.id === bookid)[0])
      .then(res => {
        console.log(res);
        filterSearch(bookid);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <div className="p-2">
              <h5 className="d-inline">{book.title}</h5>
              <button
                type="button"
                id={book.id}
                className="btn btn-primary btn-sm mr-2 float-right"
                onClick={handleClick}
              >
                save
              </button>
              <a
                className="btn btn-primary btn-sm mr-2 float-right"
                href={book.link}
                role="button"
              >
                view
              </a>

              <p>Written by {book.authors ? book.authors.join(",") : ""}</p>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-3 col-lg-2">
                <img className="img-fluid" src={book.image} alt="..." />
              </div>
              <div
                className="col-sm-8 col-md-9 col-lg-10"
                style={{ height: "30vh", overflow: "auto" }}
              >
                <p>{book.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardResult;
