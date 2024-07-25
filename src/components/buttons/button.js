import React from "react";

export default function Button({ text, bgcolor, onClick, textcolor }) {
  return (
    <button
      style={{ text: text, bgcolor: bgcolor, textcolor: textcolor }}
    ></button>
  );
}
