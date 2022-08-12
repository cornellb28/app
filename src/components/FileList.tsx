import React, { useState } from "react";
import FileCard from "./FileCard";
import { IState as Props } from "../App";
import { Row } from "react-bootstrap";

interface IProps {
  tracks: Props["tracks"];
}

export default function FileList({ tracks }: IProps): JSX.Element {
  function sortByDate(a: any, b: any): 1 | -1 | 0 {
    const dateA = a.createDate;
    const dateB = b.createDate;
    return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
  }

  const renderList = (): JSX.Element[] => {
    return tracks.map((track) => {
      return <FileCard track={track} key={track.id} />;
    });
  };
  return <Row>{renderList()}</Row>;
}

// https://www.youtube.com/watch?v=jrKcJxF0lAU&t=2019s
