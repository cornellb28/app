import "../styles/index.css";
import "./index";

export function upload() {
  const files = window.api.uploadFiles();
  console.log(files);
}
