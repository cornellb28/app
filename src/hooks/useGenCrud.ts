import { trackMeta } from "../../interfaces";
import { useEffect, useState } from "react";

// // https://stackoverflow.com/questions/59125973/react-typescript-argument-of-type-is-not-assignable-to-parameter-of-type
// interface IState {
//   data: Array<trackMeta>;
//   setData: React.Dispatch<React.SetStateAction<trackMeta[]>>;
//   prevState: [];
// }

// function useGenCrud(initialData: trackMeta[], delayMs: number = 1000) {
//   // https://linguinecode.com/post/how-to-use-react-usestate-with-typescript
//   const [data, setData] = useState<IState>();
//   const [error, setError] = useState();

//   useEffect(() => {
//     async function getData() {
//       await new Promise((resolve) => setTimeout(resolve, delayMs));
//       try {
//         setData(initialData);
//       } catch (e) {
//         setError(e);
//       }
//     }
//     getData();
//   }, [initialData, delayMs]);

//   function addRecord(newObject: any) {
//     async function addData() {
//       await new Promise((resolve) => setTimeout(resolve, delayMs));
//       setData(function (oriState) {
//         return [...oriState, newObject];
//       });
//     }
//     addData();
//   }
//   function updateRecord(id: string, updateObject: {}): void {
//     async function updateData() {
//       await new Promise((resolve) => setTimeout(resolve, delayMs));
//       setData(function (oriState) {
//         const dataRecord = oriState.data?.find((rec: {}) => rec?.trackId === id);
//         for (const [key, value] of Object.entries(updateObject)) {
//           dataRecord[key] = value === undefined ? dataRecord[key] : value;
//         }
//         return oriState.prevState?.map((rec: {}) => (rec.trackId === id ? dataRecord : rec));
//       });
//     }
//     updateData();
//   }

//   function deleteRecord(id: string) {
//     async function deleteData(): Promise<void> {
//       await new Promise((resolve) => setTimeout(resolve, delayMs));
//       setData(function (oriState) {
//         return oriState.filter((rec: {}) => rec.trackId != id);
//       });
//     }
//     deleteData();
//   }

//   return {
//     data,
//     error,
//     addRecord,
//     updateRecord,
//     deleteRecord,
//   };
// }

// export default useGenCrud;
