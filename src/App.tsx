import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import FileList from "./components/FileList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FolderList from "./components/FolderList";
import { trackMeta } from "../interfaces/index";
import tracks from "./data/tracks.json";

export default function App() {


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
              <FileList />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
// https://stackoverflow.com/questions/60482018/make-a-sidebar-from-react-bootstrap
// https://stackoverflow.com/questions/38486660/how-to-add-a-classname-id-to-react-bootstrap-component
