import React from "react";

function TodoList(props){
  return(
    <section className="sectionTodoList">
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };