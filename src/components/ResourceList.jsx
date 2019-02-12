import React from "react";
import userResources from "./userResources";

const ResourceList = ({ resource }) => {
  const resources = userResources(resource);

  return (
    <ul>
      {resources.map(record => {
        return <li key={record.id}>{record.title}</li>;
      })}
    </ul>
  );
};

export default ResourceList;
