import React from "react";
import {
  Header,
  ContentHeader,
  ContentHome,
  ContentCard,
  ItemHome,
  Card,
  CardBusca,
  InputBusca,
  ButtonBusca,
} from "./style";

import IconBusca from "../../assets/icons/IconBusca";
import LogoPreto from "../../assets/icons/LogoPreto";

export default function Home() {
  //OBJETO TESTE --- INICIO
  const Camisetas = [
    {
      tipo: "Camiseta",
      item: "Camiseta 1",
      preco: 10,
    },
    {
      tipo: "Camiseta",
      item: "Camiseta 2",
      preco: 10,
    },
    {
      tipo: "Camiseta",
      item: "Camiseta 3",
      preco: 10,
    },
  ];
  const Calcas = [
    {
      tipo: "Calça",
      item: "Calça 1",
      preco: 10,
    },
    {
      tipo: "Calça",
      item: "Calça 2",
      preco: 10,
    },
    {
      tipo: "Calça",
      item: "Calça 3",
      preco: 10,
    },
  ];
  const Calcados = [
    {
      tipo: "Tenis",
      item: "Tenis 1",
      preco: 10,
    },
    {
      tipo: "Tenis",
      item: "Tenis 2",
      preco: 10,
    },
    {
      tipo: "Tenis",
      item: "Tenis 3",
      preco: 10,
    },
  ];
  //OBJETO TESTE -- FINAL

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
        <ItemHome>
          <Card>
            <ContentCard>Classeficação: Camisetas</ContentCard>
            <ContentCard>
              {Camisetas.map((item) => (
                <div>
                  <div>{item.item}</div>
                </div>
              ))}
            </ContentCard>
            <ContentCard>
              <div>Mais...</div>
            </ContentCard>
          </Card>
        </ItemHome>
        <ItemHome>
          <Card>
            <ContentCard>Classeficação: Calças</ContentCard>
            <ContentCard>
              {Calcas.map((item) => (
                <div>
                  <div>{item.item}</div>
                </div>
              ))}
            </ContentCard>
            <ContentCard>
              <div>Mais...</div>
            </ContentCard>
          </Card>
        </ItemHome>
        <ItemHome>
          <Card>
            <ContentCard>Classeficação: Calçados</ContentCard>
            <ContentCard>
              {Calcados.map((item) => (
                <div>
                  <div>{item.item}</div>
                </div>
              ))}
            </ContentCard>
            <ContentCard>
              <div>Mais...</div>
            </ContentCard>
          </Card>
        </ItemHome>
      </ContentHome>
    </div>
  );
}
