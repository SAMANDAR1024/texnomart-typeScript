import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex p-5 text-2xl justify-between items-center">
      <Link href={"/"}> Logo</Link>
      <div className="flex gap-10 items-center">
        <Link href={"/about"}>About</Link>
        <Link href={"/card"}>Products</Link>
      </div>
    </nav>
  );
}

export default Navbar;
