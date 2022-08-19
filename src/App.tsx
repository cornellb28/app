import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import FileList from "./components/FileList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FolderList from "./components/FolderList";
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
      fileName: "/80s/HipHop/filename.mp3",
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
      fileName: "/90s/HipHop/filename.mp3",
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
      id: "3",
      title: "Example3",
      size: 908778,
      fileName: "/90s/HipHop/filename2.mp3",
      artist: "Artist2",
      bpm: "90",
      contentGroup: "contentGroup",
      genre: "genre",
      remixArtist: "remixArtist",
      composer: "composer",
      initialKey: "initalKey",
      label: "label",
      year: "1968",
      comment: { text: "comments thats new" },
    },
  ]);
  return (
    <Container fluid className="mh-100 main">
      <Row>
        <Col xs={2} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col xs={10} id="page-content-wrapper">
          <Row className="mb-3">
            <Col md={12}>
              <FolderList />
              <h3>All Files</h3>
              <FileList tracks={tracks} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
// https://stackoverflow.com/questions/60482018/make-a-sidebar-from-react-bootstrap
// https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component
