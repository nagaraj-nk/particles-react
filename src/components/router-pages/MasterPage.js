import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function MasterPage(props) {
  const [updateState, setUpdateState] = useState({
    state: {
      todos: [],
      prevIndex: -1,
      selectedItem: {}
    },
  });

  const refreshState = (key, value) => {
    updateState.state[key] = value;
    setUpdateState({
      state: updateState.state,
    });
  };

  const { id } = useParams();

  const menuItemClicked = (index) => {
    var res = updateState.state.todos[index];
    res.active = "yes";
    updateState.state.todos[index] = res;
    refreshState("selectedItem", res);
    localStorage.setItem("selectedId", res.id);
    if (updateState.state.prevIndex != -1) {
      res = updateState.state.todos[updateState.state.prevIndex];
      res.active = "no";
      updateState.state.todos[updateState.state.prevIndex] = res;
    }
    refreshState("prevIndex", index);
    refreshState("todos", updateState.state.todos);
    props.selectedItem(res);
  };

  useEffect(() => {
    if (id == undefined) {
      id = 1;
    }

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        refreshState("todos", json);
      });
  }, []);
  return (
    <div style={{ height: "650px",overflowY: "auto" }}>
      <p>Master</p>
      <ul className="list-group">
        {updateState.state.todos &&
          updateState.state.todos.map((item, i) => (
            <li
              key={i}
              onClick={() => menuItemClicked(i)}
              className={`list-group-item list-group-item-action 
            ${item.active == "yes" ? " active " : ""}`}
            >
              {item.title.length > 10
                ? item.title.substring(0, 20)
                : item.title}
            </li>
          ))}
      </ul>
    </div>
  );
}
