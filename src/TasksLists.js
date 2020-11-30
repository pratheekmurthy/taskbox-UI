import React from 'react'
import Taskitem from './Taskitem'

const TasksList =(props)=>{
    const {tasks,removeitem,edititem} =props
    
    return (<div>
         {tasks.length === 0 ? (<div>
            <h2>No Tasks found</h2>
            <p>Add Your first task</p>
            </div>
            ):(
                <div>
                    <h2>My tasks - {tasks.length}</h2>
                    {
                        tasks.map((task)=>{
                            return (
                                <Taskitem key={task.id} {...task} removeitem={removeitem} edititem={edititem}/>
                            )
                        })
                    }
                </div>
            )}
       
    </div>)
}


export default TasksList