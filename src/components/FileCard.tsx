import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
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

interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function FileCard({ track }: TRACK) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: "Hip Hop" },
    { key: 1, label: "Soul" },
    { key: 2, label: "Jazz" },
    { key: 3, label: "Classics" },
    { key: 4, label: "Indie Dance" },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
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
        <div>
          {chipData.map((data) => {
            let icon;
            return (
              <ListItem key={data.key}>
                <Chip
                  icon={icon}
                  label={data.label}
                  onDelete={
                    data.label === "React" ? undefined : handleDelete(data)
                  }
                />
              </ListItem>
            );
          })}
        </div>
      </Card>
    </Col>
  );
}
