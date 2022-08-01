import React from "react";
import Todo_box_header from "./Todo_box_header";
import Todo_box_body from "./Todo_box_body";
import useTodoHook from "../hooks/useTodoHook";
import "../css/Todo.css";

const Todo_box = () => {
  const [setTask, addTask, taskArray, task, deleteTask, editTask, actionButton, setActionButton] =
    useTodoHook();
  return (
    <div className="container">
      <Todo_box_header
        setTask={setTask}
        addTask={addTask}
        task={task}
        actionButton={actionButton}
      ></Todo_box_header>

      <Todo_box_body
        taskArray={taskArray}
        deleteTask={deleteTask}
        editTask={editTask}
        setActionButton={setActionButton}
      ></Todo_box_body>
    </div>
  );
};

export default Todo_box;
