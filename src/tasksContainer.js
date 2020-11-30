import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import TasksList from './TasksLists'
import AddTask from './Addtask'


const TaskContainer =(props)=>{
    const [tasks,setTasks] = useState ([])

  useEffect (() =>{
        axios.get("http://localhost:3033/api/tasks")
            .then((response)=>{
                const result = response.data
                
            setTasks(result);
            })//success
            .catch((err)=>{
                alert(err.message);
            }) //error
        

    },[])

    const addItem =(task)=>{
        // console.log(task)
        setTasks([...tasks,task])
        // console.log(tasks)

        
    }

    const removeitem =(id)=>{
        const result =tasks.filter((task)=>{
            return task.id !== id 
        })
        setTasks(result);
        
    }

    const edititem =(task)=>{
        const result = tasks.map((t)=>{
            if(t.id === task.id){
                return {...t,...task}
            }else{
                return {...t}
            }
        })
        setTasks(result);
    }
    
    return (<div>
       <TasksList tasks={tasks} removeitem={removeitem} edititem={edititem}/>
       <AddTask addItem={addItem}/>
       </div>)
}

export default TaskContainer