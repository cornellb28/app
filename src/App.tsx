import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Uploader from "./components/Uploader";
import FileList from "./components/FileList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { trackMeta } from "../interfaces/index";

export interface IState {
  tracks: trackMeta[];
}

export default function App() {
  const [tracks, setTracks] = useState<IState["tracks"] | []>([
    {
      id: "1",
      title: "Example",
      size: 908778,
      filename: "/80s/HipHop/filename.mp3",
      artist: "Artist",
      bpm: "90",
      contentGroup: "contentGroup",
      genre: "genre",
      remixArtist: "remixArtist",
      composer: "composer",
      initialKey: "initalKey",
      label: "label",
      year: "1988",
      comment: { text: "comments thats new" },
    },
    {
      id: "2",
      title: "Example",
      size: 908778,
      filename: "/90s/HipHop/filename.mp3",
      artist: "Artist",
      bpm: "90",
      contentGroup: "contentGroup",
      genre: "genre",
      remixArtist: "remixArtist",
      composer: "composer",
      initialKey: "initalKey",
      label: "label",
      year: "1988",
      comment: { text: "comments thats new" },
    },
  ]);
  return (
    <Container fluid>
      <Row>
        <Col xs={2} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col xs={10} id="page-content-wrapper">
          <Uploader />
          <FileList tracks={tracks} />
        </Col>
      </Row>
    </Container>
  );
}

// https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component
