import * as React from "react";
import { useEffect, useState } from "react";
import FileCard from "./FileCard";
import { Row } from "react-bootstrap";
import { trackMeta } from "../../interfaces/";
import tracks from "../data/tracks.json";

export interface IState {
  tracks: trackMeta[];
}

export default function FileList() {
  const [tracksData, setTracksData] = useState<IState["tracks"] | []>([]);
  const [tracksDataError, setTracksDataError] = useState();

  useEffect(() => {
    async function getData() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      try {
        // @ts-ignore
        setTracksData(tracks);
      } catch (error) {
        setTracksDataError(error);
      }
    }
    getData();
  }, []);

  if (tracksDataError) {
    return <div>error: {tracksDataError}</div>;
  }

  if (!tracksData) return <div>...loading</div>;
  return (
    <Row>
      {tracksData.map((track) => (
        <FileCard track={track} key={track.id} />
      ))}
    </Row>
  );
}

// https://www.youtube.com/watch?v=jrKcJxF0lAU&t=2019s
