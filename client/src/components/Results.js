import React from "react";
import CardResult from "./CardResult.js";

function Results(props) {
  console.log(props);
  //props are objects which are passed between components
  return (
    <div
      className="row mt-3"
      style={{ display: props.books.length ? "" : "none" }}
    >
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">Results</div>
          {props.books &&
            props.books.map(book => (
              <CardResult
                key={book.id}
                // books={props.books}
                // filterSearch={props.filterSearch}
                {...props}
                book={book}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Results;
