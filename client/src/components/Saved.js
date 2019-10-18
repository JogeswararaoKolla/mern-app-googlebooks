import React, { useState, useEffect } from "react";
import { Row, Col } from "./Grid/index.js";

import API from "../utils/API.js";
import SaveBook from "../components/SavedBook.js";
function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log("use Effect running !");
    API.getBooks()
      .then(results =>
        setBooks(() => {
          console.log(results);
          return results.data;
        })
      )
      .catch(err => console.log(err));
  }, []);

  const filterSearch = id => {
    setBooks(books.filter(book => book._id !== id));
  };

  return (
    <div>
      <Row className="row">
        <Col className="col-md-12">
          <div className="card">
            <div className="card-header">Saved Books</div>
            {books.length
              ? books.map(book => (
                  <SaveBook
                    key={book._id}
                    books={books}
                    book={book}
                    filterSearch={filterSearch}
                  />
                ))
              : ""}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Saved;
