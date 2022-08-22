import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import FileList from "./components/FileList";
import Uploader from "./components/Uploader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FolderList from "./components/FolderList";
import { trackMeta } from "../interfaces/index";
import tracks from "./data/tracks.json";

export default function App() {
  return (
    <Container fluid className="main-app">
      <Row className="vh-100">
        <Col
          xs={2}
          id="sidebar-wrapper"
          className="d-flex bg-dark text-white flex-shrink flex-column p-3"
        >
          <Sidebar />
        </Col>
        <Col xs={10} id="page-content-wrapper" className="p-0">
          <Uploader />
          <FolderList />
          <hr />
          <FileList />
        </Col>
      </Row>
    </Container>
  );
}
// https://stackoverflow.com/questions/60482018/make-a-sidebar-from-react-bootstrap
// https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component
