import * as React from "react";
import { useEffect, useState } from "react";
import FileCard from "./FileCard";
import api from "../../api/tracks";
import { sortByDate } from "../../src/helpers/helper";
import { IState as Props } from "../App";
import { Row } from "react-bootstrap";

interface IProps {
  tracks: Props["tracks"];
}

export default function FileList({ tracks }: IProps) {
  const [tracksData, setTrackData] = useState();
  // Retrieve Tracks
  const retreiveTracks = async () => {
    const response = await api.get("/tracks");
    return response.data;
  };

  useEffect(() => {
    const getAllTracks = async () => {
      const allTracks = await retreiveTracks();
      if (!allTracks) return;
      setTrackData(allTracks);
    };

    getAllTracks();
  }, []);

  const renderList = (): JSX.Element[] => {
    return tracks.map((track) => {
      return <FileCard track={track} key={track.id} />;
    });
  };
  return <Row>{renderList()}</Row>;
}

// https://www.youtube.com/watch?v=jrKcJxF0lAU&t=2019s
