import React, { useState, useRef } from "react";
import {
  Header,
  ContentHeader,
  ContentHome,
  ContentCard,
  Card,
  CardBusca,
  InputBusca,
  ButtonBusca,
} from "./style";
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
      <Header>
        <ContentHeader>OffSupply</ContentHeader>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <CardBusca>
            <InputBusca></InputBusca>
            <ButtonBusca>BUSCAR</ButtonBusca>
          </CardBusca>
        </div>
      </Header>

      <ContentHome>
        <ContentCard>
          <Card></Card>
        </ContentCard>
        <ContentCard>
          <Card></Card>
        </ContentCard>
      </ContentHome>
    </div>
  );
}
