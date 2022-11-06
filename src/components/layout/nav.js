import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <div id="navigation" className="navigation">
      <nav>
        <ul>
          <li>
            <a
              href="https://www.netflix.com/browse"
              target="_blank"
              rel="noopener noreferrer"
            >
              Browse
            </a>
          </li>
          <li>
            <Link to="/top-picks">Top picks</Link>
          </li>
          <li>
            <a
              href="https://www.netflix.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Recent
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
