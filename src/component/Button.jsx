import React from "react";

const Button = ({ placeholder, className }) => {
  return (
    <>
      <button className={`hover:bg-hbtn active:bg-abtn ${className}`}>
        {placeholder}
      </button>
    </>
  );
};

export default Button;
