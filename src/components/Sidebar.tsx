import React from "react";
import Nav from "react-bootstrap/Nav";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

export default function Sidebar() {
  return (
    <>
      <span className="d-flex fs-4">FILEWIZ</span>
      <hr />
      <Nav
        as="ul"
        activeKey="/home"
        variant="pills"
        className="flex-column mb-auto"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item as="li">
          <Nav.Link href="/home" className="align-middle">
            <HomeIcon className="me-2" fontSize="small" />
            home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <hr />
      <h3 className="h5">Playlist</h3>
      <Nav
        as="ul"
        activeKey="/home"
        className="flex-column mb-auto text-white"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item as="li">
          <Nav.Link href="" className="align-middle">
            <PlaylistAddIcon className="me-2" fontSize="small" />
            Playlist 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <hr />
      <div className="drowpdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        >
          <SettingsIcon className="me-2" fontSize="small" />
          <strong>Setting</strong>
        </a>
      </div>
    </>
  );
}
