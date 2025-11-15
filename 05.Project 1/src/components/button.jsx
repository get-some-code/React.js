import React from "react";

function Button({ buttonName, buttonColor, setColor }) {

  const colorMap = {
    red: "bg-red-500 hover:bg-red-600",
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-500 hover:bg-green-600",
    lavender: "bg-purple-300 hover:bg-purple-400",
    olive: "bg-lime-700 hover:bg-lime-800",
    black: "bg-black hover:bg-gray-900",
    white: "bg-white hover:bg-gray-100 text-black border border-gray-300",
  };

  const colorClass = colorMap[buttonColor] || "bg-gray-500 hover:bg-gray-600";

  return (
    <button
      type="button"
      className={`${colorClass} border border-transparent 
        box-border shadow-xs font-medium leading-5 rounded-base 
        text-sm px-4 py-2.5 focus:outline-none`}
        onClick={() => setColor(buttonColor)}
    >
      {buttonName}
    </button>
  );
}

export default Button;
