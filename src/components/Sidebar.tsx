import React from "react";
import SidebarMenu, {
  SidebarMenuBody,
  SidebarMenuNavLink,
} from "react-bootstrap-sidebar-menu";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

import Uploader from "./Uploader";

export default function Sidebar() {
  return (
    <SidebarMenu variant="dark">
      <SidebarMenu.Header className="mb-5">
        <SidebarMenu.Brand>
          The Brand Icon <AccessAlarm fontSize="medium" />
        </SidebarMenu.Brand>
        <SidebarMenu.Toggle />
      </SidebarMenu.Header>

      <SidebarMenu.Body>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Icon>
              <i className="fa-solid fa-file-shield"></i>
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title>hello 2</SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
        <SidebarMenu.Sub>
          <SidebarMenu.Sub.Toggle>
            <SidebarMenu.Nav.Icon />
            <SidebarMenu.Nav.Title></SidebarMenu.Nav.Title>
          </SidebarMenu.Sub.Toggle>
          <SidebarMenu.Sub.Collapse>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link>
                <SidebarMenu.Nav.Icon></SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title></SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
          </SidebarMenu.Sub.Collapse>
        </SidebarMenu.Sub>
        <Uploader />
      </SidebarMenu.Body>
    </SidebarMenu>
  );
}
