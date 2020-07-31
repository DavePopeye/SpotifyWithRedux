import React from "react";
import { Row } from "react-bootstrap";
import "../Style/Upperbar.css";

class Upperbar extends React.Component {
  render() {
    return (
      <Row className="upperBarStyle">
        <div>
          <ul class="list-group list-group-horizontal nav">
            <li class="nav-item topBar">
              <div>
                <a
                  class="nav-link listOfPages"
                  onclick="styleClick(event)"
                  href="#"
                >
                  TRENDING
                </a>
                <div class="underLine d-block"> </div>
              </div>
            </li>
            <li class="nav-item topBar">
              <div class="col">
                <a
                  class="nav-link listOfPages"
                  onclick="styleClick(event)"
                  href="#"
                >
                  PODCAST
                </a>
                <div class="underLine d-none"></div>
              </div>
            </li>
            <li class="nav-item topBar">
              <div class="col">
                <a
                  class="nav-link listOfPages"
                  onclick="styleClick(event)"
                  href="#"
                >
                  MOODS AND GENRES
                </a>
                <div class="underLine d-none"></div>
              </div>
            </li>
            <li class="nav-item topBar">
              <div class="col">
                <a
                  class="nav-link listOfPages"
                  onclick="styleClick(event)"
                  href="#"
                >
                  NEW REALEASES
                </a>
                <div class="underLine d-none"></div>
              </div>
            </li>
            <li class="nav-item topBar">
              <div class="col">
                <a
                  class="nav-link listOfPages"
                  onclick="styleClick(event)"
                  href="#"
                >
                  DISCOVER
                </a>
                <div class="underLine d-none"></div>
              </div>
            </li>
          </ul>
        </div>
      </Row>
    );
  }
}

export default Upperbar;
