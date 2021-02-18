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
} from "./style";
// var { Transition } = require("react-transition-group"); // ES6

export default function ModalLogin() {
  const showModal = useSelector(ModalState);
  // const [teste, setTeste] = React.useState(false);

  if (showModal) {
    // setTimeout(() => {
    //   setTeste(true);
    // }, 500);
    return (
      <div

      // id="ContentModalLogin"
      // className={teste ? "enter-active" : "exit-active"}
      >
        <Content>
          <Modal>
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
        </Content>
      </div>
    );
  } else {
    // setTimeout(() => {
    //   setTeste(false);
    // }, 1);
    return null;
  }

  // return (
  //   <Content showModal={showModal}>
  //     <Modal>
  //       <ContentModal>
  //         {/* <ItemModal>MODAL LOGIN/CADASTRO</ItemModal> */}
  //       </ContentModal>
  //     </Modal>
  //   </Content>
  // );
}
