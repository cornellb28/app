import "bootstrap";
import "./scss/app.scss";
import "@fortawesome/fontawesome-free/js/all";


export async function scanDirectory() {
  const returnedTracks = await window.api.uploadFiles();
  console.log(returnedTracks);
}