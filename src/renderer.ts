import "../styles/index.css";
import "./index";

// retrieve rootFolder path
export async function upload() {
  await window.api.uploadFiles();
}
