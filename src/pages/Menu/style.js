import styled from "styled-components";

export const LeftMenu = styled.div`
  z-index: 9;
  overflow-x: auto;
  display: block;
  width: 380px;
  height: 100%;
  background-color: white;
  align-items: center;
  position: fixed;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${({ open }) =>
    open ? "1px 1px 20px 0px black" : "0px 0px 0px 0px black"};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-75%)")};

  @media (max-width: 1024px) {
    width: 300px;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  }
`;

export const Titulo = styled.h1`
  margin-top: 5%;
  color: ${({ teste }) => (teste ? "black" : "#7800FF")};
  margin-top: 10%;
  margin-left: 80px;
`;

export const ListaMenu = styled.div`
  /* padding: 15px; */
`;

export const ItemMenu = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: center;
  transition: transform 0.5s ease-in-out;

  :hover {
    box-shadow: 1px 1px 20px 0px black;
    color: white;
    background-color: #7800ff;
  }

  :active {
    box-shadow: 0px 0px 0px 0px black;
    transition: transform 0.5s ease-in-out;
  }
`;
