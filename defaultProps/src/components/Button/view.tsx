import { ButtonProps } from "./types";

const View = (props: ButtonProps) => {
  return <button>{props?.message}</button>;
};

View.defaultProps = {
  message: "Hello World",
};

export default View;
