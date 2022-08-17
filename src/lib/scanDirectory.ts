export async function scanDirectory() {
  const returnedTracks = await window.api.uploadFiles();
  console.log(returnedTracks);
}
