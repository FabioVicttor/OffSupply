import React from "react";
import { LeftMenu, Titulo, ListaMenu, ItemMenu } from "./style";
import IconShoppingCart from "../../assets/icons/shopping_cart";
import IconShoppingBag from "../../assets/icons/shopping_bag";

export default function Menu({ open, setOpen, teste }) {
  return (
    <LeftMenu open={open}>
      <div>
        <Titulo teste={teste}>Off_Supply</Titulo>
      </div>
      <ListaMenu>
        <ItemMenu>
          <IconShoppingCart />
          <h2>Teste</h2>
        </ItemMenu>
        <ItemMenu>
          <IconShoppingBag />
          <h2>Teste</h2>
        </ItemMenu>
      </ListaMenu>
    </LeftMenu>
  );
}
