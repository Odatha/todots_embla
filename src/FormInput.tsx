import React from "react";

const FormInput = props => {
  return (
    <input
      type={props.type}
      className="item"
      name={props.name}
      placeholder={props.placeholder && props.placeholder}
      defaultValue={props.defaultValue && props.defaultValue}
    />
  );
};

export default FormInput;
