import React from 'react';

function EmptyTodos()
{
  return (
    <React.Fragment>
      <img src={require('../../images/EmptyTodos.jpg')} alt="EmptyTodos" />
      <p>¡Crea tu primer TODO!</p>
    </React.Fragment>
  );
}

export { EmptyTodos }