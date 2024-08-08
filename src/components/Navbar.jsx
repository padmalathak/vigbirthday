import React from "react";
import { appleImg } from "../utils";

function Navbar() {
  return (
    <header>
      <nav>
        <img
          src={appleImg}
          alt="apple"
          className="src"
          width={14}
          height={18}
        />
      </nav>
    </header>
  );
}

export default Navbar;
