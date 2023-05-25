import { useState } from "react";

function TodoForm({ addTask, task }) {

    const [initial, setInitial] = useState('');

    const insertString = (text) => {
        setInitial(text.target.value)
    }

    const newTask = () => {

        if (document.getElementById("addtask").value === '') {
            alert("please insert a task before you add!");
        } else if (task.includes(document.getElementById("addtask").value)) {
            alert("That's already in the List")
        } else {
            addTask(prevTask => {
                return [...prevTask, initial]
            })
        }
        document.getElementById("addtask").value = '';
    }

    return (
        <>
            <div className="row">
                <input type="text" placeholder="task" className="p-3 mt-3" onChange={insertString} id="addtask" />
            </div>
            <div className="row">
                <button className="btn btn-dark mt-3" onClick={newTask}>Add Task</button>
            </div>
        </>
    )
}

export default TodoForm;