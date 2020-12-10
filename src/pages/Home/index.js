import React, { useState, useRef } from "react";
// import { Titulo } from "./style";
import Burger from "../Menu/Burger/Burger";
import Menu from "../Menu/index";
import { useOnClickOutside } from "./hooks";
// import Nuvem from "../../assets/image/cloud_1.png";
// import Nuvem2 from "../../assets/image/cloud_2.png";

export default function Home() {
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
    <div style={{ overflowX: "auto" }}>
      <div>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen}></Burger>
          <Menu open={open} setOpen={setOpen} teste={teste}></Menu>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#7947B3",
          height: "450px",
          padding: "40px",
        }}
      >
        <div
          style={{
            marginTop: "95px",
            textAlign: "center",
            fontSize: "60px",
          }}
        >
          OffSupply
        </div>
      </div>

      <div style={{ backgroundColor: "transparent", marginTop: "-120px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "600px",
              height: "500px",
              // backgroundColor: "#c0c0c0",
              backgroundColor: "white",
              margin: "20px",
              borderRadius: "30px",
              boxShadow: "1px 1px 20px 0px black",
            }}
          ></div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "600px",
              height: "500px",
              // backgroundColor: "#c0c0c0",
              backgroundColor: "white",
              margin: "20px",
              borderRadius: "30px",
              boxShadow: "1px 1px 20px 0px black",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
