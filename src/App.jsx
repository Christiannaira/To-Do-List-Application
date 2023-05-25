import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {

  const doneList = [];

  const [taskList, settaskList] = useState([]);

  const [finishedTask, setFinishedTask] = useState([]);

  const eachDoneList = doneList.map(eachDone => {
    <h2>{eachDone}</h2>
  })

  return (
    <>
      <div className="container m-5 p-5 border">

        <h1 className="text-center fw-bold">TODO APP</h1>

        <TodoList myTask={taskList} deleteTask={settaskList} doneList={doneList} />

        <TodoForm addTask={settaskList} task={taskList} />

      </div>
      <div className="container m-5 p-5 border">

        <h1 className="text-center fw-bold">FINISHED TASK</h1>
        {eachDoneList}

      </div>
    </>
  )
}

export default App
