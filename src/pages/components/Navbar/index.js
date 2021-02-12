import React, { useEffect, useState } from "react";
import { ContentNavbar, ContentNavbarIcon, ItemNavbar } from "./style";

import LogoPreto from "../../../assets/icons/LogoPreto";
import IconCart from "../../../assets/icons/IconCart";
import IconUser from "../../../assets/icons/IconUser";

export default function Navbar() {
  const [largura, setLargura] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    const handleResize = () => setLargura(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [scrollposition, setScrollPosition] = useState(0);

  const onScroll = () => {
    const scrollY = window.scrollY;
    setScrollPosition(scrollY);
  };

  return (
    <ContentNavbar scrollposition={scrollposition}>
      <ContentNavbarIcon scrollposition={scrollposition} largura={largura}>
        <LogoPreto />
      </ContentNavbarIcon>
      <div style={{ display: "flex", position: "absolute", right: "20px" }}>
        <ItemNavbar>
          <IconUser />
        </ItemNavbar>
        <ItemNavbar>
          <IconCart />
        </ItemNavbar>
      </div>
    </ContentNavbar>
  );
}
