import React from "react";
import { Row, Col } from "react-bootstrap";
import "./App.css";
import Sidebar from "./Component/Sidebar";
import Upperbar from "./Component/Upperbar";
import Homepage from "./Component/Homepage";

function App() {
  return (
    <div className="App">
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs={10}>
          <Upperbar />
          <Homepage />
        </Col>
      </Row>
    </div>
  );
}

export default App;
