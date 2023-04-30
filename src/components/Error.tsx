import { FC } from "react";
import block from "bem-css-modules";

import s from "./Error.module.scss";
const b = block(s);

interface Props {
  message: string;
}

const Error: FC<Props> = ({ message }) => {
  return <div className={b()}>{message}</div>;
};

export default Error;
