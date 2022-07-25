import React from "react";

export default function ProjectFeature(props) {
  return (
    <div className="h-96">
      <h1 className="text-white">hello</h1>
      <h1 className="text-white">{props.name}</h1>
      <h1 className="text-white">{props.description}</h1>
    </div>
  );
}
