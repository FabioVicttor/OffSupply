import React, { useState, useRef } from "react";
import Burger from "./components/Menu/Burger/Burger";
import Menu from "./components/Menu/index";
import Home from "../pages/Home/index";
import Footer from "../pages/components/Footer/footer";
import Navbar from "./components/Navbar/index";
import ModalLogin from "./components/Modal/Login/index";
import { useOnClickOutside } from "./hooks";

export default function Index() {
  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <div>
        <div ref={node}>
          <Navbar />
          <Burger open={open} setOpen={setOpen}></Burger>
          <Menu open={open} setOpen={setOpen}></Menu>
        </div>
        <ModalLogin />
        <Home />
        <Footer />
      </div>
    </div>
  );
}
