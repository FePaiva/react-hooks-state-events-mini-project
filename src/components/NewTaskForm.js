import { useState } from 'react';

function NewTaskForm(props) {
    
  let [textState, setTextState] = useState("")
  let [categoryState, setCategoryState] = useState("Code")

  function handleTextState(event) { 
    setTextState(event.target.value)
  }
  function handleCategoryState(event) {
    setCategoryState(event.target.value)
  }

  let dropdown = props.categories.map((category) => {
    if (category !== "All")
     return (<option key={category}>{category}</option>)
    }
  )

  function handleOnTaskFormSubmit(e){
    e.preventDefault()
    const updatedTaskList = {
      text: textState,
      category: categoryState,
    }
    console.log(updatedTaskList)
    props.onTaskFormSubmit(updatedTaskList )
  }

  return (
    <form onSubmit={handleOnTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleTextState} value={textState} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleCategoryState} value={categoryState} name="category">
          {dropdown}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
