import { useState, useEffect } from "react";

function Completed({ eachTask, setFinishedTask, setTaskList }) {

    const returnThis = () => {
        setTaskList((prevTask) => {
            return [...prevTask, eachTask]
        })

        setFinishedTask((prevTask) => {
            const prevList = [...prevTask];
            const newList = prevList.filter((value) => value !== eachTask);
            return newList
        })

    }

    return (
        <>
            <div className={`container m-1 border p-3 rounded-pill text-bg-success`} style={{ cursor: 'pointer' }} onClick={returnThis}>
                {'✅'} {eachTask.task}
            </div>
        </>
    )
}

export default Completed;