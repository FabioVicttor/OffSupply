import React, { useEffect, useState } from "react";
import {
  ContentNavbar,
  ContentNavbarIcon,
  ItemNavbar,
  ContentItemNavbar,
} from "./style";
import { useDispatch } from "react-redux";
import { setShow } from "../../../redux/actions";

import LogoPreto from "../../../assets/icons/LogoPreto";
import IconCart from "../../../assets/icons/IconCart";
import IconUser from "../../../assets/icons/IconUser";

export default function Navbar() {
  const dispatch = useDispatch();
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

  const [overflow, setOverflow] = React.useState("auto");
  React.useEffect(() => {
    document.body.style.overflow = overflow;
  }, [overflow]);

  function showModalLogin() {
    dispatch(setShow());

    if (overflow === "hidden") {
      setOverflow("auto");
    } else {
      setOverflow("hidden");
    }
  }

  return (
    <ContentNavbar scrollposition={scrollposition}>
      <ContentNavbarIcon scrollposition={scrollposition} largura={largura}>
        <LogoPreto />
      </ContentNavbarIcon>
      <ContentItemNavbar>
        {largura > 720 ? (
          <ItemNavbar onClick={showModalLogin}>
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
