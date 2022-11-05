import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="description">
          <p>&copy;ROLACK DEV - 2022</p>
        </div>
        <div className="social-networks">
          <a target="_blank" href="https://github.com/vcrolack">
            <FontAwesomeIcon size="3x" icon={["fab", "github"]} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/rolack-victor/">
            <FontAwesomeIcon size="3x" icon={["fab", "linkedin"]} />
          </a>
          <FontAwesomeIcon size="3x" icon={["fab", "twitter"]} />
        </div>
      </div>
    </div>
  );
};
