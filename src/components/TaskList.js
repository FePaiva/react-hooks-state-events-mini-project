import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDeleteTask }) {
  
  const taskList = tasks.map((task) => (
    < Task key={task.text} 
      text={task.text} 
      category={task.category} 
      handleDeleteTask={handleDeleteTask}
      />
  ))

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;

// {tasks.map((task) => (
//   <Task key={task.text} 
//   text={task.text} 
//   category={task.category} 
//   handleDeleteTask={handleDeleteTask}/>
// ))}