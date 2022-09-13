import React from 'react';

function TodosError({error})
{
  return (
    <React.Fragment>
      <img src={require('../../images/TodosError.jpg')} alt="TodosError" />
      <p>{error}</p>
    </React.Fragment>
  );
}

export { TodosError }