import React from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <Link to="/home">
            Home
          </Link>
          <Link to="/contact">
            Contact 
          </Link>
          <Link to="/project">
            Projects
          </Link>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;