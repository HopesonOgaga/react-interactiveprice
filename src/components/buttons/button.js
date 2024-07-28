import React from "react";
// button function
export default function Button({ textColor, bgColor, onClick, text }) {
  return (
    <button
      className="w-36  h-12   rounded-xl shadow-sm font-bold capitalize hover:bg-purple-800  "
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
