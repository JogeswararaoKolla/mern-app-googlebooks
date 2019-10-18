import React from "react";
import API from "../utils/API.js";
function SavedBook({ books, book, filterSearch }) {
  const handleClick = e => {
    e.preventDefault();
    const id = e.target.id;
    API.deleteBook(id).then(result => {
      console.log(result);
      filterSearch(id);
    });
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
                id={book._id}
                className="btn btn-primary btn-sm mr-2 float-right"
                onClick={handleClick}
              >
                delete
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

export default SavedBook;
