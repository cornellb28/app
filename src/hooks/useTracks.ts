// import { useState, useEffect } from "react";
// import tracks from "../../data/tracks.json";
// import { v4 as uuidv4 } from "uuid";

// function useTracks() {
//   const [tracksData, setTrackData] = useState([]);
//   const [tracksDataError, setTracksDataError] = useState();

//    useEffect(() => {
//     async function getData(): Promise<void> {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       try {
//         setTrackData(tracks);
//       } catch (e) {
//         setTracksDataError(e);
//       }
//     }
//     getData();
//   }, []);
// }

// function uploadTrack(title, description) {
//     const newTrack = {
//       id: uuidv4(),
//       title,
//       description,
//       createDate: new Date().toISOString(),
//     };
//     setTrackData((oldTracks) => {
//       return [...oldTracks, newTrack]; // Order does not matter as sort happens later
//     });
//   }

// function updateNote(id, title, description) {
//     setNotesData(function (oriState) {
//       return oriState.map(function (rec) {
//         return rec.id !== id
//           ? rec
//           : {
//               ...rec,
//               title: title ? title : rec.title,
//               description: description ? description : rec.description,
//             };
//       });
//     });
//   }

// function deleteNote(id) {
//     setNotesData(function (oriState) {
//       return oriState.filter(function (rec) {
//         return rec.id !== id;
//       });
//     });
//   }
// return { notesData, notesDataError, createNote, updateNote, deleteNote };
// }

// export default useTracks;
// // https://jsramblings.com/how-to-use-usestate-hook-in-react-with-typescript/
export {}