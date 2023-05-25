function TodoItem({ item, deleteTask, doneList }) {

    const removeThis = () => {

        deleteTask((prevTask) => {
            const prevList = [...prevTask];
            const newList = prevList.filter((value) => value !== item);
            const removedList = prevList.filter((value) => value === item);
            doneList.push(removedList);
            return newList;
        })




    }

    return (
        <>
            <div className="container border p-3 border-1">
                <h4 id="task"><span id="text">{item}</span> <span className="btn-success btn float-end" onClick={removeThis} id="button">done? </span></h4>
            </div>

        </>
    )
}

export default TodoItem;