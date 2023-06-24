import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-primary text-white font-[Poppins] py-2 px-4 rounded-2xl hover:bg-secondary duration-500"
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;

export const ButtonDua = (props) => {
  return (
    <button className="border-double border-2 border-primary text-white font-[Poppins] py-2 rounded hover:bg-indigo-400 duration-500">
      {props.children}
    </button>
  );
};
