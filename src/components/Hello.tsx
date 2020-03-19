import React from "react";

export interface propsType {
  compiler: String;
  framework: String;
}
export const Hello = (props: propsType) => (
  <h1>
    Hello from {props.compiler} and {props.framework}
  </h1>
);
