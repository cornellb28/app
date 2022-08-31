// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

// Interface can't become an array
export interface trackMeta {
  id: string;
  size?: string | undefined;
  fileName: string;
  title?: string | undefined;
  artist?: string | undefined;
  bpm?: string | undefined;
  contentGroup?: string | undefined;
  genre?: string | undefined;
  remixArtist?: string | undefined;
  composer?: string | undefined;
  initialKey?: string | undefined;
  label: string | undefined;
  year?: string | undefined;
  comment?: {
    language: string;
    text: string;
  };
  album?: string;
  publisher?: string;
  fileType?: string;
  image?:
    | string
    | {
        mime: string;
        type: {
          id: number;
          name: string;
        };
        description: string;
        imageBuffer: Buffer;
      };
  length?: string;
  popularimeter: {
    email: string;
    rating: number;
    counter: number;
  };
}

// export type TrackMeta = trackMeta[];

// https://stackoverflow.com/questions/25469244/how-can-i-define-an-interface-for-an-array-of-objects
