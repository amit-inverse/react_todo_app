import React from "react";
import "../css/Todo.css";

const Todo_box_header = ({setTask, addTask,task, actionButton}) => {

  return (
    <>
      <div>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={addTask} disabled={task === ""}>{!actionButton ? 'Add Task' : 'Edit Task'}</button>
      </div>
    </>
  );
};

export default Todo_box_header;
