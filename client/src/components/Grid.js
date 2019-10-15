import React from "react";

export function Row(props) {
  return <div className="row">{props.children}</div>;
}

export function Col(props) {
  const cols = props.colvalues
    .split(" ")
    .map(e => "col-" + e)
    .join(" ");
  return <div className={cols}>{props.children}</div>;
}

export function Container(props) {
  return (
    <div className={props.fluid ? "container-fluid" : "container"}>
      {props.children}
    </div>
  );
}
