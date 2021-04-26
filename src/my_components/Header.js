import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
        </div>
      </nav>
    </div>
  );
}

Headers.defaultProps = {
  title: "Your title here",
  searchBar: false,
};

Headers.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};
