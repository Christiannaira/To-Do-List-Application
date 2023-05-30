import { useState, useEffect } from "react";
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Completed from "./Completed";

function App() {

  const [taskList, setTaskList] = useState([


  ])

  const [finishedTask, setFinishedTask] = useState([

  ]);

  const eachFinishedTask = finishedTask.map((each) => (
    <Completed eachTask={each.task} />
  ))

  return (
    <>
      <div className="container m-5 p-5 border border-dark">
        <h2 className="fw-bolder text-center text-primary mb-2">TODO APPLICATION</h2>
        <TodoForm task={taskList} setTask={setTaskList} />
        <TodoList task={taskList} setTask={setTaskList} setFinishedTask={setFinishedTask} />
      </div>

      <div className="container m-5 p-5 border border-dark">
        <h3 className="fw-bolder text-center text-primary">COMPLETED TASK</h3>
        {eachFinishedTask}
      </div>
    </>
  )
}

export default App
