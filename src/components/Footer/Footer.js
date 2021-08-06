import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Navbar
        bg="dark"
        fixed="bottom"
        className="Footer justify-content-around"
      >
        <div>
          <Link to="/" className="pl-2"></Link>{" "}
          <Link to="/save" className="px-2"></Link>
          <small className="text-muted mx-5 px-5">
            {" "}
            Copyright &copy; 2021 by Aboulaye{" "}
          </small>{" "}
        </div>
      </Navbar>
    </footer>
  );
}

export default Footer;
