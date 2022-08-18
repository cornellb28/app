export async function scanDirectory() {
  const selectedFiles = await window.api.uploadFiles();
}

 export function sortByDate(a: any, b: any): 1 | -1 | 0 {
   const dateA = a.createDate;
   const dateB = b.createDate;
   return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
 }
