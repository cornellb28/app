import * as fs from "fs";
const glob = require("glob");

export function fetchFilesData(data: string[]) {
  console.log("This is File(s):  " + typeof data);
}

export async function fetchDirData(data: string) {
  const scanSelectedDir = (data: string) => {
    return new Promise<string>((resolve, reject) => {
      glob(`${data}/**/`, (err: Error, files: any) => {
        resolve(files);
      });
    });
  };
  const result = await scanSelectedDir(data);
  console.log("result: ", result);
}

export function isDirectory(fileNames: string[]): boolean {
  let check: boolean = false;
  for (let file of fileNames) {
    let checkStatus = fs.lstatSync(file).isDirectory() === false ? false : true;
    if (checkStatus === false) return;
    check = checkStatus;
  }
  return check;
}

module.exports = { fetchFilesData, fetchDirData, isDirectory };
