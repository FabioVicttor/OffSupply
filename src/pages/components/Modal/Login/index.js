import React from "react";
import { ModalState } from "../../../../redux/selectors";
import { useSelector } from "react-redux";
import {
  Content,
  Modal,
  ContentModal,
  ItemModal,
  InputLogin,
  ButtonLogin,
  Item,
  ContentX,
  X,
} from "./style";
import { Frame } from "framer";

export default function ModalLogin() {
  const showModal = useSelector(ModalState);

  const variants = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
    visible: { opacity: 1 },
  };

  if (showModal) {
    return (
      <div>
        <Content>
          <Frame
            initial="hidden"
            animate="visible"
            variants={variants}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Modal>
              <ContentX>
                <X
                  style={{
                    border: "black",
                    borderStyle: "solid",
                    borderRadius: "10px",
                    transform: "rotate(45deg)",
                    
                  }}
                ></X>
                <X
                  style={{
                    border: "black",
                    borderStyle: "solid",
                    borderRadius: "10px",
                    transform: "rotate(-45deg)",
                  }}
                ></X>
              </ContentX>
              <ContentModal>
                <div>
                  <ItemModal>
                    <InputLogin
                      id="loginemail"
                      type="text"
                      placeholder="E-Mail"
                    />
                  </ItemModal>
                  <ItemModal>
                    <InputLogin
                      id="senhalogin"
                      type="password"
                      placeholder="Senha"
                    />
                  </ItemModal>
                  <ItemModal>
                    <ButtonLogin>ENTRAR</ButtonLogin>
                  </ItemModal>
                  <ItemModal>
                    <Item>Recuperar Senha</Item>
                    <Item>Registrar-se</Item>
                  </ItemModal>
                </div>
              </ContentModal>
            </Modal>
          </Frame>
        </Content>
      </div>
    );
  } else {
    return null;
  }
}
