import React from 'react';
import './App.css';
import Sidebar from './Component/Sidebar'
import Upperbar from './Component/Upperbar';
import Homepage from './Component/Homepage'
import { Row, Col } from "react-bootstrap"
import { BrowserRouter as Router , Switch, Route } from "react-router-dom"
import AlbumPage from './Component/AlbumPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>
          <Col xs={10}>
            <Upperbar />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/album" componet={AlbumPage} />
            </Switch>
          </Col>
        </Row>      
      </div>
    </Router>
    
  );
}

export default App;
