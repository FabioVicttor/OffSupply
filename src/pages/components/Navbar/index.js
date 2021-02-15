import React, { useEffect, useState } from "react";
import {
  ContentNavbar,
  ContentNavbarIcon,
  ItemNavbar,
  ContentItemNavbar,
} from "./style";

import LogoPreto from "../../../assets/icons/LogoPreto";
import IconCart from "../../../assets/icons/IconCart";
import IconUser from "../../../assets/icons/IconUser";

export default function Navbar({ show, setShow }) {
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

  // const [show, setShow] = useState(false);

  // function showModal() {
  //   setShow(true);
  // }

  return (
    <ContentNavbar scrollposition={scrollposition}>
      <ContentNavbarIcon scrollposition={scrollposition} largura={largura}>
        <LogoPreto />
      </ContentNavbarIcon>
      <ContentItemNavbar>
        {largura > 720 ? (
          <ItemNavbar
            onClick={(e) => {
              console.log(e);
              setShow(true);
            }}
          >
            <IconUser />
          </ItemNavbar>
        ) : (
          <ItemNavbar></ItemNavbar>
        )}
        <ItemNavbar>
          <IconCart />
        </ItemNavbar>
      </ContentItemNavbar>
    </ContentNavbar>
  );
}
