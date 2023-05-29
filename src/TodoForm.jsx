import { useState, useEffect } from "react";

function TodoForm({ task, setTask }) {

    const [newTask, setNewTask] = useState({
        task: '',
        complete: false,
    })

    const handleNewTask = (task) => {
        setNewTask((prevData) => {
            return { ...prevData, task: task.target.value }
        })
    }

    const submitNewData = () => {

        if (document.querySelector("input").value === '') {
            alert("empty task");
        }
        else {
            setTask((prevTaskList) => {
                return [...prevTaskList, newTask];
            });
        }

        document.querySelector("input").value = '';
    }


    return (
        <>
            <div className="container m-1 border p-3 rounded-pill" style={{ position: 'relative' }}>
                <input type="text" className="form-control rounded-pill" placeholder="enter new task" onChange={handleNewTask} />
                <button className="btn btn-dark rounded-pill w-50" style={{ position: 'absolute', top: '50%', right: '15px', transform: 'translateY(-50%)' }} onClick={submitNewData} >Submit</button>
            </div>
        </>
    )
}

export default TodoForm;