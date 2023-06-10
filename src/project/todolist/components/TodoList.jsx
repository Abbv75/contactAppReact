import React from 'react'
import Task from './Task'

export default function TodoList({ taskList }) {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
            {
                taskList.map((task) => {
                    return (
                        <Task
                            date = {task.date}
                            task = {task.task}
                        />
                    )
                })
            }
        </div>
    )
}
