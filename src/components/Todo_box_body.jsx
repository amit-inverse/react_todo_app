import React from "react";

const Todo_box_body = ({ taskArray, deleteTask, editTask, setActionButton }) => {
  return (
    <>
      <div className="taskList">
        {taskArray.map((task, index) => {
          return (
            <div key={task?.id}>
              <p className="task">{task?.task}</p>
              <button onClick={() => deleteTask(task?.id)}>Delete</button>
              <button onClick={() => editTask(task?.id)}>Edit</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo_box_body;
