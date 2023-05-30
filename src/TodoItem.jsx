import { useState } from "react";

function TodoItem({ item, setTask, setFinishedTask, task }) {

    const [newChange, setNewChange] = useState({
        task: '',
        complete: false,
    })


    const removeThis = () => {

        setNewChange(() => {
            return { task: item.task, complete: item.complete }
        })

        setFinishedTask((prevFinished) => {
            return [...prevFinished, {
                task: item.task,
                complete: true,
            }];
        })

        setTask((prevTask) => {
            const prevList = [...prevTask];
            const newList = prevList.filter((value) => value !== item);
            return newList
        })

    }


    return (

        <>
            <div className={`container m-1 border p-3 rounded-pill text-bg-primary`}>
                <span style={{ cursor: 'pointer' }} onClick={removeThis}>{'❎'}</span> {item.task}
            </div>
        </>
    )
}

export default TodoItem;