import { trackMeta } from "../../interfaces";
import { useEffect, useState } from "react";

// https://stackoverflow.com/questions/59125973/react-typescript-argument-of-type-is-not-assignable-to-parameter-of-type

function useGeneralizedCrudMethods(
  initialData: trackMeta[],
  delayMs: number = 1000
) {
  // https://linguinecode.com/post/how-to-use-react-usestate-with-typescript
  const [data, setData] = useState<Array<trackMeta> | null>(null);
  const [error, setError] = useState();

  useEffect(() => {
    async function getData() {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      try {
        setData(initialData);
      } catch (e) {
        setError(e);
      }
    }
    getData();
  }, [initialData, delayMs]);

  function addRecord(newObject: any) {
    async function addData() {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      setData(function (oriState) {
        return [...oriState, newObject];
      });
    }
    addData();
  }

  function updateRecord(id: string, updateObject: {}) {
    async function updateData() {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      setData(function (oriState) {
        const dataRecord = oriState.find((rec) => rec.trackId === id);
        for (const [key, value] of Object.entries(updateObject)) {
          dataRecord[key] = value === undefined ? dataRecord[key] : value;
        }
        return oriState.map((rec) => (rec.id === id ? dataRecord : rec));
      });
    }
    updateData();
  }
  function deleteRecord(id) {
    async function deleteData() {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      setData(function (oriState) {
        return oriState.filter((rec) => rec.id != id);
      });
    }
    deleteData();
  }
}
