import * as React from "react";
import { useState } from "react";
import { trackMeta } from "../../interfaces";
import { Col } from "react-bootstrap";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Chip from "@mui/material/Chip";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Fab
} from "@mui/material";

type TRACK = {
  track: trackMeta;
};

export default function FileCard({ track }: TRACK) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Col md={4}>
      <Card id="trackCard" className="p-0 mb-3">
        <Box
          component="div"
          className="position-relative"
          id="track-media-card"
        >
          <IconButton
            aria-label="add to favorites"
            className="track-favorite-button position-absolute"
          >
            <FavoriteIcon />
          </IconButton>
          <CardMedia
            component="img"
            image={track.image}
            alt="Live from space album cover"
          />
        </Box>
        <CardContent className="track-media-content">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {track.artist}
          </Typography>
          <Typography variant="h3" sx={{ fontSize: 18 }} component="div">
            {track.title}
          </Typography>
        </CardContent>
      </Card>
    </Col>
  );
}
