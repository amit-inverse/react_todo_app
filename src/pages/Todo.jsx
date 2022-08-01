import React, { useEffect, useState } from "react";
import Todo_box from "../components/Todo_box";
import "../css/Todo.css";

const Todo = () => {
  return (
    <div className="wrapper">
      <Todo_box></Todo_box>
    </div>
  );
};

export default Todo;
