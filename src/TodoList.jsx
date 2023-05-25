import TodoItem from "./TodoItem";



function TodoList({ myTask, deleteTask, doneList }) {

    const eachList = myTask.map(each => (
        <TodoItem item={each} deleteTask={deleteTask} doneList={doneList} />
    ))

    return (
        <>
            {eachList}

        </>
    )
}

export default TodoList;