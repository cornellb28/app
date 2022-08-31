import * as fs from "fs";
import path from "path";
import { glob } from "glob";
import nodeID3, { Tags } from "node-id3";
import { trackMeta } from "../../interfaces/";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

interface DataSource {
  imageData: string;
  text: string;
  size: string;
  metaData: Partial<Tags | Buffer>;
  fileName: string;
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

const getFileSize = (path: string) => {
  const stats = fs.statSync(path).size;
  return `${stats}`;
};

// Lets get the meta-tags with Nodeid-3
const nodeID3Scan = async (path: string) => {
  const firstBuf = Buffer.alloc(1024);
  const tags = {
    size: `${getFileSize(path)}`,
    fileName: path,
    title: "Default Title",
    artist: "Default Artist",
    bpm: "98",
    contentGroup: "Default contentGroup",
    genre: "Default Genre",
    remixArtist: "Default remixArtist",
    composer: "Default Composer",
    initialKey: "initialKey",
    label: "label",
    year: "9999",
    comment: {
      language: "eng",
      text: "www.beatjunkies.com",
    },
    album: "Default Album",
    publisher: "publisher",
    fileType: "fileType",
    length: "length",
    popularimeter: {
      email: "",
      rating: 0,
      counter: 0,
    },
    image: {
      mime: "string",
      type: {
        id: 0,
        name: "string",
      },
      description: "string",
      imageBuffer: firstBuf,
    },
  };
  const nodeScanFile = nodeID3.read(path);
  if (_.isEmpty(nodeScanFile)) {
    let file = fs.readFileSync(path);
    await fs.writeFileSync(path, nodeID3.update(tags, file));
  }
  return nodeScanFile;
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

// grabbing the files, converting,
export const getMetaData = async (dir: string) => {
  const fetchFiles = await fetchFilesData(dir);
  let newFiles = [];

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
    "popularimeter",
  ];

  for (let fileName of fetchFiles) {
    // Getting the fileSize
    const size = getFileSize(fileName);
    //const filesSizeInBytes = humanFileSize(stats);

    // Scan for metadata
    const audioTags = await nodeID3Scan(fileName);
    const metaData = _.pick(audioTags, defaultTags);
    console.log("metaData", metaData);
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
      size,
      metaData,
      fileName,
    };
    // newFiles.push(convertTags);
  }
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
// https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
