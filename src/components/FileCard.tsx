import * as React from "react";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import { styled } from "@mui/material/styles";
import { trackMeta } from "../../interfaces";
import { Col } from "react-bootstrap";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Chip,
  Grid,
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
  const theme = useTheme();
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
    <Col md={6}>
      <Card id="trackCard" className="p-0 mb-3 d-flex">
        <Box sx={{ position: "relative" }}>
          <CardMedia
            sx={{ width: 200 }}
            component="img"
            alt="Live from space album cover"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }} className="p-2">
          <CardContent sx={{ flex: "1 0 auto" }} className="p-0">
            <Typography component="div" variant="h6">
              {track.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {track.artist}
            </Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </CardContent>
          <Grid container spacing={1}>
            {chipData.map((data) => {
              let icon;
              return (
                <Grid item key={data.key}>
                  <Chip
                    icon={icon}
                    label={data.label}
                    onDelete={
                      data.label === "React" ? undefined : handleDelete(data)
                    }
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Card>
    </Col>
  );
}
