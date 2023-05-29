function Completed({ eachTask }) {
    return (
        <>
            <div className={`container m-1 border p-3 rounded-pill text-bg-success`}>
                {'✅'} {eachTask}
            </div>
        </>
    )
}

export default Completed;