import { trackMeta } from "../../interfaces";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import React from "react";

type TRACK = {
  track: trackMeta;
};

// id: "1",
//       title: "Example",
//       size: 908778,
//       filename: "/80s/HipHop/filename.mp3",
//       artist: "Artist",
//       bpm: "90",
//       contentGroup: "contentGroup",
//       genre: "genre",
//       remixArtist: "remixArtist",
//       composer: "composer",
//       initialKey: "initalKey",
//       label: "label",
//       year: "1988",
//       comment: { text: "comments thats new" },

export default function FileCard({ track }: TRACK) {
  return (
    <Col md="4">
      <Card className="p-0 mb-3">
        <Card.Header>
          <p className="text-end m-0">
            Location: <a href="#">{track.filename}</a>
          </p>
        </Card.Header>
        <Row>
          <Col lg="2">
            <Image fluid src="" />
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
                <div className="p-1 d-flex me-auto">
                  <span className="track-label me-2">Size:</span>
                  <span className="track-value">{track.size}</span>
                </div>
                <div className="p-1 d-flex me-auto">
                  <span className="track-label me-2">Size:</span>
                  <span className="track-value">{track.size}</span>
                </div>
                <div className="p-1 d-flex me-auto">
                  <span className="track-label me-2">Size:</span>
                  <span className="track-value">{track.size}</span>
                </div>
                <div className="p-1 d-flex me-auto">
                  <span className="track-label me-2">Size:</span>
                  <span className="track-value">{track.size}</span>
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
    </Col>
  );
}