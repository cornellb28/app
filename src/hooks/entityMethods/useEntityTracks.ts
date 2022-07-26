import { v4 as uuidv4 } from "uuid";

interface TrackData {
  id: string;
  size?: string;
  filename: string;
  title?: string;
  artist?: string;
  bpm?: string;
  remixArtist?: string;
  composer?: string;
  contentGroup?: string;
  genre?: string;
  initialKey?: string;
  label?: string;
  year?: string;
  comment?: string;
  getImage?: (buffer: Buffer) => string;
}

export default function useEntityTracks(
  url: string,
  errorNotificationFn: Function
) {
  // will upload multiple files, folders
  function uploadTrackEntity(...metadata: TrackData[]) {
    console.log(metadata);
    const trackId = uuidv4();
    return trackId;
  }
}
