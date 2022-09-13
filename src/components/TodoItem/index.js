import React from "react";
import './TodoItem.css';

function TodoItem(props){
  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        &#9989;
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        &#10060;
      </span>
    </li>
  );
}

export { TodoItem };