import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "./Grid.js";
import API from "../utils/API.js";

function SearchForm() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.getBooks()
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  });

  const handleChange = e => {
    setSearch(e.target.value);
  };
  const handleClick = e => {
    e.preventDefault();
    console.log(`search term is ${search}`);
    console.log(books);
    setSearch("");
  };
  return (
    <Container fluid={0}>
      <Row>
        <Col colvalues="md-12">
          <div className="card">
            <div className="card-header">
              <h3>Book Search</h3>
            </div>
            <h6 style={{ padding: "10px 10px 0px 10px" }}>Book</h6>
            <form>
              <div
                style={{ paddingLeft: "10px", paddingRight: "10px" }}
                className="form-group"
              >
                <input
                  className="form-control"
                  value={search}
                  onChange={handleChange}
                  type="text"
                />
              </div>
              <div style={{ padding: "10px", float: "right" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!search}
                  onClick={handleClick}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchForm;
