// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

// Interface can't become an array
export interface trackMeta {
  trackId: string;
  size: number;
  filename: string;
  title: string | null;
  artist: string | null;
  bpm: string | null;
  contentGroup: string | null;
  genre: string | null;
  remixArtist: string | null;
  composer: string | null;
  initialKey: string | null;
  label: string | null;
  year: string | null;
  comment: { text: string | null };
}
