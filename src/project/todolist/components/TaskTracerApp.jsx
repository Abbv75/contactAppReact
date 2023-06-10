import React, { useState } from 'react'
import ToDoCreator from './ToDoCreator'
import TodoList from './TodoList'
import Titre from './Titre';

export default function TaskTracerApp() {
    let taskTmp = Array();

    const [taskList, setTaskList] = useState(taskTmp);
    const [date, setDate] = useState(null)
    const [task, setTask] = useState(null)

    const changeDate= (e)=>{
        setDate(e.target.value);
    }
    
    const changeTask= (e)=>{
        setTask(e.target.value);
    }

    const ajoutertache = ()=>{
        taskTmp.push({date : date, task : task});
        setTaskList(taskTmp);
        console.log("TaskList");
        console.log(taskList);
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "30px", alignItems: "flex-start" }}>
            <Titre/>
            <ToDoCreator 
                date={date} 
                task={task} 
                onDateChange={changeDate}
                onTaskChange={changeTask}
                onAjouter = {ajoutertache}
            />
            <TodoList taskList={taskList}/>
        </div>
    )
}
