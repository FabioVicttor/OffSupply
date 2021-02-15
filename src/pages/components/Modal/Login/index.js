import React, { useEffect, useState } from "react";

export default function ModalLogin({ show, setShow }) {
  if (show) {
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
    </div>;
  }
  return null;
}
