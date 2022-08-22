import * as React from "react";
import Box from "@mui/material/Box";
import { Row, Col } from "react-bootstrap";
import { scanDirectory } from "../helpers/helper";
import PermMediaIcon from "@mui/icons-material/PermMedia";

export default function Uploader() {
  // fetch directory path
  const uploadButton = async () => {
    const getData = await scanDirectory();
  };

  return (
    <>
      <Box
        id="dropzone"
        component="div"
        sx={{ border: "1px dashed grey" }}
        className="my-3 mx-4"
      >
        <h3>Upload you Files</h3>
        <div className="drag-area">
          <div>
            <PermMediaIcon fontSize="small" />
          </div>
          <span className="">
            Drag &amp; Drop or{" "}
            <a href="#" onClick={() => uploadButton()} className="button">
              browse
            </a>
          </span>

          <span>Supports: MP3, WAV, Folders</span>
        </div>
      </Box>
    </>
  );
}
