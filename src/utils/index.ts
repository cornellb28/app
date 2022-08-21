import * as fs from "fs";
import path from "path";
import { glob } from "glob";
import NodeID3, { Tags } from "node-id3";
import { trackMeta } from "../../interfaces/";
import { v4 as uuidv4 } from "uuid";
import { pick } from "lodash";

interface DataSource {
  imageData: string;
  text: string;
  filesSizeInBytes: string;
  metaData: Partial<Tags>;
  fileName: string;
}

export interface trackMetaConverted {
  id: string;
  size: string | undefined;
  fileName: string;
  title: string | undefined;
  artist: string | undefined;
  bpm: string | undefined;
  contentGroup: string | undefined;
  genre: string | undefined;
  remixArtist: string | undefined;
  composer: string | undefined;
  initialKey: string | undefined;
  label: string | undefined;
  year: string | undefined;
  comment: string | null;
  album: string;
  publisher: string;
  fileType: string;
  image: string | undefined;
  length: string;
}

// Using Glob to fetch the files from the Directory
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

// Checks if the path is a Directory
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
const ID3Scan = async (path: string) => {
  const nodeScan = await NodeID3.read(path, { noRaw: false });
  return nodeScan;
};

function humanFileSize(bytes: number, si = false, dp = 1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }

  const units = si
    ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return bytes.toFixed(dp) + " " + units[u];
}

// convert the object to have all attributes
function getTrackMetaData({imageData, text,filesSizeInBytes, metaData, fileName}: DataSource): trackMetaConverted {
  return {
    id: uuidv4(),
    size: filesSizeInBytes ? filesSizeInBytes : "",
    fileName: fileName,
    title: metaData.title ? metaData.title : "",
    artist: metaData.artist ? metaData.artist : "Add Artist Name",
    bpm: metaData.bpm ? metaData.bpm : "",
    remixArtist: metaData.remixArtist ? metaData.remixArtist : "",
    composer: metaData.composer ? metaData.composer : "",
    contentGroup: metaData.contentGroup ? metaData.contentGroup : "",
    initialKey: metaData.initialKey ? metaData.initialKey : "",
    label: metaData.publisher ? metaData.publisher : "",
    year: metaData.year ? metaData.year : "",
    genre: metaData.genre ? metaData.genre : "default genre",
    album: metaData.album ? metaData.album : "default album",
    fileType: metaData.fileType ? metaData.fileType : "",
    image: imageData ? imageData : undefined,
    length: metaData.length ? metaData.length : "",
    comment: text ? text : "",
    publisher: metaData.publisher ? metaData.publisher : ""
  };
}

// grabbing the files, converting,
export const getMetaData = async (dir: string) => {
  const rootPath = dir;
  const fetchFiles = await fetchFilesData(dir);
  let newFiles: trackMeta[] = [];

  const defaultTags = [
    "title",
    "artist",
    "bpm",
    "genre",
    "label",
    "image",
    "initialKey",
    "year",
    "length",
    "contentGroup",
    "publisher",
    "comment",
    "remixArtist",
    "composer",
    "album",
    "fileType",
    "length",
  ];

  for (let fileName of fetchFiles) {
    // Getting the fileSize
    const stats = fs.statSync(fileName).size;
    const filesSizeInBytes = humanFileSize(stats);

    // Scan for metadata
    const audioTags = await ID3Scan(fileName);
    const metaData = pick(audioTags, defaultTags);
    const { image, comment } = metaData;
    if (typeof image === "undefined" || typeof image === "string") continue;
    if (typeof comment === "undefined") continue;

    const { text } = comment;
    const { imageBuffer } = image;

    // convert Buffer to base64
    const base64 = imageBuffer.toString("base64");
    const imageData = `data:image/png;base64,${base64}`;

    const data: DataSource = {
      imageData,
      text,
      filesSizeInBytes,
      metaData,
      fileName,
    };

    const convertTags = getTrackMetaData(data);
    newFiles.push(convertTags);
  }
  return newFiles;
};

export const saveDataToJson = (data: trackMeta[]) => {
  const jsonData = path.join(process.cwd(), "src/data/tracks.json");
  try {
    fs.writeFileSync(jsonData, JSON.stringify(data, null, 2), "utf8");
    console.log("The file was saved!");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  isDirectory,
  getMetaData,
  saveDataToJson,
};

// https://dmitripavlutin.com/return-await-promise-javascript/
// https://stackoverflow.com/questions/36093042/how-do-i-add-to-an-existing-json-file-in-node-js
// https://github.com/sindresorhus/load-json-file/issues/9
// https://dev.to/dnature/convert-a-base64-data-into-an-image-in-node-js-3f88
// https://stackoverflow.com/questions/18884840/adding-a-new-array-element-to-a-json-object
// https://stackoverflow.com/questions/40381507/convert-base64-image-data-to-png
