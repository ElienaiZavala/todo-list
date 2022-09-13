import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal( prevState => !prevState );
  };
  
  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      &#10133;
    </button>
  );
}

export { CreateTodoButton };