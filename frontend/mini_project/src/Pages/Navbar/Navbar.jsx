import React from "react";
import PinkNavbar from "./PinkNav";
import SearchBar from "./SearchBar";
import GrayNav from "./GrayNav";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <>
      <PinkNavbar />
      <GrayNav />
      <SearchBar />
      <NavbarMenu />
    </>
  );
}
