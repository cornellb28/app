import * as fs from "fs";
import path from "path";
import { glob } from "glob";
import NodeID3 from "node-id3";
import { trackMeta } from "../../interfaces/index";
import { v4 as uuidv4 } from "uuid";
import { pick } from "lodash";

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
function getTrackMetaData(data): trackMeta {
  return {
    id: uuidv4(),
    size: data.size ? data.size : fileSize,
    fileName: fileName,
    title: data.title ? data.title : "",
    artist: data.artist ? data.artist : "Add Artist Name",
    bpm: data.bpm ? data.bpm : "",
    remixArtist: data.remixArtist ? data.remixArtist : "",
    composer: data.composer ? data.composer : "",
    contentGroup: data.contentGroup ? data.contentGroup : "",
    initialKey: data.initialKey ? data.initialKey : "",
    label: data.publisher ? data.publisher : "",
    year: data.year ? data.year : "",
    genre: data.genre ? data.genre : "default genre",
    album: data.album ? data.album : "default album",
    fileType: data.fileType ? data.fileType : "",
    image: data.image ? data.image.imageBuffer : undefined,
    length: data.length ? data.length : "",
    comment: data.comment ? data.comment.text : "",
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

    const data = {
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
