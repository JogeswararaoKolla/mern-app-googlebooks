import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
import Results from "./Results.js";

function SearchForm() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log("use Effect running !");
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filterSearch = id => {
    setBooks(books.filter(element => element.id !== id));
  };

  const handleClick = e => {
    e.preventDefault();
    console.log(`search term is ${search}`);
    API.getGoogleBooks(search)
      .then(res => {
        setBooks(() => {
          const results = res.data.items.map(element => {
            return {
              id: element.id,
              title: element.volumeInfo.title,
              link: element.volumeInfo.infoLink,
              description: element.volumeInfo.description
                ? element.volumeInfo.description
                : "Description not available",
              authors: element.volumeInfo.authors,
              image: element.volumeInfo.imageLinks.thumbnail
            };
          });
          console.log(results);
          return results;
        });
      })
      .catch(err => console.log(err));
    setSearch("");
  };
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Book Search</div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="formsearchInput">Book</label>
                  <input
                    type="text"
                    className="form-control"
                    value={search}
                    onChange={handleChange}
                    placeholder="Search Books"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary float-right"
                  onClick={handleClick}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Results books={books} filterSearch={filterSearch} />
    </React.Fragment>
  );
}

export default SearchForm;
