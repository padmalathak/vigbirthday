import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";

function Navbar() {
  return (
    <header>
      <nav>
        <img
          src={appleImg}
          alt="apple"
          className="src"
          width={40}
          height={18}
        />
        <div>
          {["Husband", "Father", "Happy Birthday"].map((nav, id) => {
            return <div key={id}>{nav}</div>;
          })}
        </div>

        <div>
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="Bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
