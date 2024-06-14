import { React, useEffect, useState } from "react";

export function DetailsPage(props) {
  const [updateState, setUpdateState] = useState({
    state: {
      todo: {},
    },
  });

  const refreshState = (key, value) => {
    updateState.state[key] = value;
    setUpdateState({
      state: updateState.state,
    });
  };

  useEffect(() => {
    console.log("details page loaded");
    fetch("https://jsonplaceholder.typicode.com/todos/" + props.selectedId)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        refreshState("todo", json);
      });
  }, []);
  return (
    <div>
      <p>Todo Details</p>
      <hr />
      <small>Id</small>
      <p>{updateState.state.todo.id}</p>
      <small>User Id</small>
      <p>{updateState.state.todo.userId}</p>
      <small>Title</small>
      <p>{updateState.state.todo.title}</p>
      <small>Completed</small>
      <p>{!updateState.state.todo.completed && "false"}</p>
      <p>{updateState.state.todo.completed && "true"}</p>
    </div>
  );
}
