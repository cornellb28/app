import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { upload } from "../renderer";

export default function Uploader() {
  const uploadButton = () => {
    window.api.uploadFiles();
  };

  return (
    <Box component="span" sx={{ border: "1px dashed grey" }}>
      <Button onClick={() => uploadButton()}>Upload Files</Button>
    </Box>
  );
}
