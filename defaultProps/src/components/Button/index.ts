import { createElement } from "react";
import View from "./view";
import { ButtonProps } from "./types";

export default (props: ButtonProps) => {
  return createElement(View, props);
};
