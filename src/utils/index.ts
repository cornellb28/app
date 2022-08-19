import * as fs from "fs";
import path from "path";
import { glob } from "glob";
import NodeID3 from "node-id3";
import { trackMeta } from "../../interfaces/index";
import { v4 as uuidv4 } from "uuid";

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
const nodeIDScan = async (path: string) => {
  const nodeScan = await NodeID3.read(path, { noRaw: false });
  return nodeScan;
};

// convert the object to have all attributes
function trackConversion(
  data: any,
  fileName: string,
  fileSize: string
): trackMeta {
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
    image: data.image ? data.image : "",
    length: data.length ? data.length : "",
    comment: {
      text: data.comment?.text ? data.comment?.text : "default comment",
    },
  };
}

// grabbing the files, converting,
export const getMetaData = async (dir: string) => {
  const fetchFiles = await fetchFilesData(dir);
  let newFiles: trackMeta[] = [];

  for (let fileName of fetchFiles) {
    // Getting the fileSize
    const stats = fs.statSync(fileName);
    const filesSizeInBytes = `${stats.size / (1024 * 1000)}MB`;

    // Scan for metadata
    const audioTags = await nodeIDScan(fileName);
    const convertTags = trackConversion(audioTags, fileName, filesSizeInBytes);
    newFiles.push(convertTags);
  }
  return newFiles;
};

export const saveDataToJson = (data: trackMeta[]) => {
  fs.writeFileSync("../data/tracks.json", JSON.stringify(data), "utf8");
  console.log("The file was saved!");
};

module.exports = {
  isDirectory,
  getMetaData,
  saveDataToJson,
};

// https://dmitripavlutin.com/return-await-promise-javascript/
