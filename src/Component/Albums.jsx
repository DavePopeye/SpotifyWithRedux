import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import "../Style/Album.css";

class Albums extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { music } = this.props;
    return (
      <>
        <Row className="m-2 d-inline-flex">
          <Col>
            <Image fluid src={music.album.cover_medium} alt={music.title} />
            <p className="fontStyle">{music.title_short}</p>
            <p className="fontStyle">{music.artist.name}</p>
          </Col>
        </Row>
      </>
    );
  }
}

export default Albums;
