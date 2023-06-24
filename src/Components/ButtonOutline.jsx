import React from "react";

const Button = (props) => {
  return (
    <button
      className="border-2 border-primary text-primary font-[Poppins] py-2 px-4 rounded-2xl hover:bg-primary hover:text-white duration-500"
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
