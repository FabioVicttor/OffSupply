import React from "react";
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

import IconBusca from "../../assets/icons/IconBusca";
import LogoPreto from "../../assets/icons/LogoPreto";

export default function Home() {
  return (
    <div>
      <Header>
        <ContentHeader>
          <LogoPreto />
        </ContentHeader>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CardBusca>
            <InputBusca></InputBusca>
            <ButtonBusca>
              <IconBusca />
              <span>BUSCAR</span>
            </ButtonBusca>
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
