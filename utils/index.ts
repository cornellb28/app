import * as fs from "fs";
import { glob } from "glob";
import NodeID3 from "node-id3";

// Interface can't become an array
interface trackMeta {
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

let arrayofTracks: trackMeta[] = [];

const fetchFilesData = async (data: string) => {
  const scanSelectedFiles = (data: string) => {
    return new Promise<string[]>((resolve, reject) => {
      glob(`${data}/**/*.{m4a,mp3}`, (err: Error, files: string[]) => {
        resolve(files);
      });
    });
  };
  const result: string[] = await scanSelectedFiles(data);
  return result;
};

export const isDirectory = (fileNames: string[]): boolean => {
  let check: boolean = false;
  for (let file of fileNames) {
    let checkStatus = fs.lstatSync(file).isDirectory() === false ? false : true;
    if (checkStatus === false) return;
    check = checkStatus;
  }
  return check;
};

// Lets get the meta-tags with Nodeid-3
const nodeIDScan = async (path: string) => {
  const options = { noRaw: false };
  const nodeScan = await NodeID3.read(path);
};

export const getMetaData = async (file: string) => {
  const fetchFiles = await fetchFilesData(file);
  for (let f of fetchFiles) {
    const getNodeID = await nodeIDScan(f);
  }
};

module.exports = {
  isDirectory,
  getMetaData,
};

// https://dmitripavlutin.com/return-await-promise-javascript/
