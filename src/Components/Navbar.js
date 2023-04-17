import React from "react";
import { Logo, LogoCon, TopNav } from "../Styles/Navbar.styles";

const Navbar = () => {
  return (
    <TopNav>
      <LogoCon>
        <Logo src="https://pagemaker.b-cdn.net/media/42705/851x315.png" />
      </LogoCon>
      {/* <MenuItems>
        Home
        Blog
        Team
      </MenuItems> */}
    </TopNav>
  );
};

export default Navbar;
