import block from "bem-css-modules";

import s from "./Footer.module.scss";
const b = block(s);

const Footer = () => {
  return (
    <div className={b()}>
      <p className={b("text")}>
        created by{" "}
        <a
          className={b("link")}
          target="_blank"
          href="https://harisahmed94.github.io/portfolio/"
        >
          <strong className={b("thick")}>Haris Ahmed</strong>,
        </a>{" "}
        designed by -{" "}
        <a
          className={b("link")}
          href="https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv"
        >
          devChallenges.io
        </a>
      </p>
    </div>
  );
};

export default Footer;
