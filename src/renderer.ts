import "bootstrap";
import "./scss/app.scss";
import "@fortawesome/fontawesome-free/js/all";
import "./index";

// retrieve rootFolder path
export async function upload() {
  const returnedTracks = await window.api.uploadFiles();
  console.log(returnedTracks)
}

// https://dev.to/theola/electron-app-with-webpack-bootstrap-fontawesome-and-jquery-a-complete-guide-54k2
