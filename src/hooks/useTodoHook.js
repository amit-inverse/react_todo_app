import React, { useEffect, useState } from "react";

const useTodoHook = () => {
  const getLocalStorageTasks = () => {
    return JSON.parse(localStorage.getItem("tasks"));
  };

  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState(getLocalStorageTasks());
  const [actionButton, setActionButton] = useState(false);
  const [editedTask, editedSetTask] = useState({});

  const addTask = () => {
    if (actionButton === false) {
      let id = new Date().getTime().toString();
      setTaskArray([...(taskArray || []), { id, task }]);
    } else {
    //   const newTaskArray = taskArray.filter(
    //     (task) => task.id !== editedTask.id
    //   );
    //   setTaskArray([
    //     ...(newTaskArray || []),
    //     { id: editedTask.id, task: task },
    //   ]);
      const index = taskArray.findIndex((task) => task.id === editedTask.id);
      taskArray[index].task = task;

      setActionButton(false);
    }
    setTask("");
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskArray));
  }, [taskArray]);

  const deleteTask = (id) => {
    if (window.confirm("Are you sure?")) {
      setTaskArray(taskArray.filter((task) => task.id !== id));
    }
  };

  const editTask = (id) => {
    setActionButton(true);
    let editedTask = taskArray.find((task) => task.id === id);
    setTask(editedTask.task);

    editedSetTask(editedTask);
  };

  return [
    setTask,
    addTask,
    taskArray,
    task,
    deleteTask,
    editTask,
    actionButton,
    setActionButton,
  ];
};

export default useTodoHook;
