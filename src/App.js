import React from 'react';
import './App.css';
import Sidebar from './Component/Sidebar'
import Upperbar from './Component/Upperbar';
import Homepage from './Component/Homepage'
import { Row, Col } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Row>
        <Col xs={3}>
          <Sidebar />
        </Col>
        <Col xs={9}>
          <Upperbar />
          <Homepage />
        </Col>
      </Row>      
    </div>
  );
}

export default App;
