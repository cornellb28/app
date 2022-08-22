import * as React from "react";
import { trackMeta } from "../../interfaces";
import { Col, Row, Card, Image } from "react-bootstrap";

type TRACK = {
  track: trackMeta;
};

export default function FileCard({ track }: TRACK) {
  return (
    <Card className="p-0 mb-3">
      <Card.Header>
        <p className="text-end m-0">
          Location: <a href="#">{track.fileName}</a>
        </p>
      </Card.Header>
      <Row>
        <Col lg="2">
          <Image fluid src={track.image} />
        </Col>
        <Col md="8">
          <Card.Body className="p-0">
            <div className="attributes d-flex flex-row flex-wrap justify-content-start">
              <div className="p-1 d-flex me-auto">
                <span className="track-label me-2">BPM:</span>
                <span className="track-value">{track.bpm}</span>
              </div>
              <div className="p-1 d-flex me-auto">
                <span className="track-label me-2">Artist:</span>
                <span className="track-value">{track.artist}</span>
              </div>
              <div className="p-1 d-flex me-auto">
                <span className="track-label me-2">Year:</span>
                <span className="track-value">{track.year}</span>
              </div>
              <div className="p-1 d-flex me-auto">
                <span className="track-label me-2">Genre:</span>
                <span className="track-value">{track.genre}</span>
              </div>
            </div>
          </Card.Body>
        </Col>

        <Col lg="2">1 of 3</Col>
      </Row>
      <Card.Footer>
        <Row>
          <Col>Buttons</Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
