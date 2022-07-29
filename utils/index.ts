import * as fs from "fs";
const fg = require("fast-glob");

export function fetchFilesData(data: string[]) {
  console.log("This is File(s):  " + typeof data);
}

export async function fetchDirData(data: string[]) {
  const scanSelectedDir = (data: string[]) => {
    return new Promise<string[]>((resolve, reject) => {
      data?.forEach((d) => {
        const folders = fg.sync(`${d}/**/`, {
          onlyFiles: true,
          dot: true,
        });
        resolve(folders);
      });
    });
  };
  const result = await scanSelectedDir(data);
  console.log("result: ", result);
}

export function isDirectory(fileNames: string[]): boolean {
  let check = false;
  for (let file of fileNames) {
    let checkStatus = fs.lstatSync(file).isDirectory() === false ? false : true;
    if (checkStatus === false) return;
    check = checkStatus;
  }
  return check;
}

module.exports = { fetchFilesData, fetchDirData, isDirectory };
