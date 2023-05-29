import TodoItem from "./TodoItem";

function TodoList({ task, setTask, setFinishedTask }) {


    const eachTask = task.map((each) => (
        <TodoItem item={each} setTask={setTask} setFinishedTask={setFinishedTask} task={task} />
    ))

    return (
        <>
            {eachTask}
        </>
    )
}

export default TodoList;