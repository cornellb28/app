import { useState, useEffect } from "react";
import tracks from "../../data/tracks.json";
import { v4 as uuidv4 } from "uuid";

function useTracks() {
  const [tracksData, setTrackData] = useState([]);
  const [tracksDataError, setTracksDataError] = useState();

  useEffect(() => {
    async function getData(): Promise<void> {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      try {
        setTrackData(tracks);
      } catch (e) {
        setTracksDataError(e);
      }
    }
    getData();
  }, []);
  return { tracksData, tracksDataError };
}

export default useTracks;
// https://jsramblings.com/how-to-use-usestate-hook-in-react-with-typescript/
