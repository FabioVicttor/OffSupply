import React from "react";
import { ModalState } from "../../../../redux/selectors";
import { useSelector } from "react-redux";

export default function ModalLogin() {
  const showModal = useSelector(ModalState);
  if (showModal) {
    return (
      <div
        style={{
          width: "1000px",
          height: "700px",
          backgroundColor: "red",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>ModalLogin</h2>
      </div>
    );
  }
  return null;
}
