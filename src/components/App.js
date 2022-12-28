import React from "react";
import './App.css';
import Header from './Header';
import Tasks from './Tasks';
import {useState} from "react";
import AddTask from "./AddTask";


const App = () =>{
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id:'1',
            text: 'Doctors Appointment',
            day : 'July 12th at 4:00pm',
            reminder : true,
        },
        {
            id:'2',
            text: 'Meeting at School',
            day : 'July 14th at 12:30pm',
            reminder : true,
        },
        {
            id:'3',
            text: 'Grocery Shopping',
            day : 'July 18th at 2:00pm',
            reminder : false,
        },

    ])
    // Add Task
    const addTask = (task) =>{
        const id = Math.floor(Math.random()*10000)+1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }
    // within the UI
    const deleteTask = (id) =>{
        setTasks(tasks.filter((tasks)=> tasks.id !== id))
    }

    //toggle reminder
    const toggleReminder = (id) =>{
        setTasks(tasks.map((tasks) => tasks.id === id ? {...tasks, reminder:
        !tasks.reminder} : tasks
        ))
    }
  return (
    <div className="container">
            <Header onAdd={() => setShowAddTask(!showAddTask)}
                    showAdd={showAddTask}
            />
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length >0 ? ( <Tasks tasks={tasks} onDelete={deleteTask}
                                    onToggle={toggleReminder} /> ) :
            ( 'No Tasks to show')}
    </div>
  );
}

export default App;
