import React from "react";
import { ModalState } from "../../../../redux/selectors";
import { useSelector } from "react-redux";
import { Content, Modal, ContentModal, ItemModal } from "./style";

export default function ModalLogin() {
  const showModal = useSelector(ModalState);
  if (showModal) {
    return (
      <Content>
        <Modal>
          <ContentModal>
            <ItemModal>MODAL LOGIN/CADASTRO</ItemModal>
            <ItemModal>MODAL LOGIN/CADASTRO</ItemModal>
            <ItemModal>MODAL LOGIN/CADASTRO</ItemModal>
          </ContentModal>
        </Modal>
      </Content>
    );
  }
  return null;
}
