import Axios from 'axios'
import React from 'react'
import Taskform from './taskform'
import axios from 'axios'


const Edittask =(props)=>{
    const {id,title,status,edititem,handleToggle} = props

    const formSubmit =(task)=>{
        console.log(task)
        axios.put(`http://localhost:3033/api/tasks/${task.id}`,task)
        .then((response)=>{
            const result = response.data
            edititem(result)
            handleToggle()
        })
        .catch((err)=>{
            alert(err.message)
        })

    }
    
    return(<div>
        <Taskform id={id} title={title} status={status} formSubmit={formSubmit}/>
    </div>)
}

export default Edittask