import React from "react";

const FormTodo = props => {
  return (
    <form onSubmit={props.onSubmit}>
      {props.children}

      <button type="submit">{props.label}</button>
    </form>
  );
};

export default FormTodo;
