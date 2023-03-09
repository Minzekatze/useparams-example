import React from "react";
import { useParams } from "react-router-dom";

export default () => {
  const { name } = useParams();
  return <h1>No results for {name}!</h1>;
};
