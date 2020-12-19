import React, { useState, useRef } from "react";
import Burger from "./components/Menu/Burger/Burger";
import Menu from "./components/Menu/index";
import Home from "../pages/Home/index";
import Footer from "../pages/components/Footer/footer";
import { useOnClickOutside } from "./hooks";

export default function Index() {
  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const [teste, setTeste] = useState(false);

  setInterval(() => {
    setTeste(true);
    setTimeout(() => {
      setTeste(false);
    }, 2500);
  }, 1500);

  return (
    <div>
      <div>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen}></Burger>
          <Menu open={open} setOpen={setOpen} teste={teste}></Menu>
        </div>
        <Home />
        <Footer />
      </div>
    </div>
  );
}
