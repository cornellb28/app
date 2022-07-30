import * as fs from "fs";
import { glob } from "glob";
import NodeID3 from "node-id3";


const fetchFilesData = async (data: string) => {
  const scanSelectedFiles = (data: string) => {
    return new Promise<string[]>((resolve, reject) => {
      glob(`${data}/**/*.m4a`, (err: Error, files: string[]) => {
        resolve(files);
      });
    });
  };
  const result: string[] = await scanSelectedFiles(data);
  return result;
};

export async function fetchDirData(data: string) {}

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
  return await new Promise<NodeID3.Tags | null>((resolve, reject) => {
    const options = { noRaw: false };
    NodeID3.read(path, options, (err, tags) => {
      try {
        resolve(tags);
      } catch (error) {
        reject(err);
      }
    });
  });
};

export const getMetaData = async (file: string) => {

};

module.exports = {
  fetchDirData,
  isDirectory,
  getMetaData,
};

// https://dmitripavlutin.com/return-await-promise-javascript/
