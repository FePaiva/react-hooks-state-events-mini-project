import { useState } from 'react';
import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

// App (Parent)
//   └── CategoryFilter (Child1)
//   ├── NewTaskForm( Child2)
//   └── TaskList (Child3)
//     └── Task (Grandchild1)


function App() {

  const [category, setCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)


function handleDeleteTask(deletedTask){
  console.log('a task will be deleted')

  setTasks(tasks.filter(task => task.text !== deletedTask))

}
  const visibleTask = tasks.filter(task => category === "All" || task.category === category) 

  function onTaskFormSubmit(e) {
		setTasks([...tasks, e]);
	}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} 
      onSelectedCategory={setCategory} 
      selectedCategory={category}/>
      <NewTaskForm categories={CATEGORIES}
      onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={visibleTask} 
      handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
