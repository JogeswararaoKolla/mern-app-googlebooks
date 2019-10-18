import React, { useState, useEffect } from "react";
import { Row, Col } from "./Grid/index.js";

import API from "../utils/API.js";

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log("use Effect running !");
    API.getBooks().then(results => setBooks(results));
  }, []);

  return (
    <div>
      <Row className="row">
        <Col className="col-md-12">
          <h2>Hello Saved Books!!</h2>
        </Col>
      </Row>
    </div>
  );
}

export default Saved;
