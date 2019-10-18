import React from "react";

export function Container({ fluid, children }) {
  return (
    <div className={fluid ? "container-fluid" : "container"}>{children}</div>
  );
}
