import React, { FC } from "react";
import "./Footer.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="footer">
      <p className="footer__text">
        created by{" "}
        <a className="footer__link" href="#">
          <strong className="footer__thick">Haris Ahmed</strong>
        </a>{" "}
        -{" "}
        <a className="footer__link" href="#">
          devChallenges.io
        </a>
      </p>
    </div>
  );
};

export default Footer;
