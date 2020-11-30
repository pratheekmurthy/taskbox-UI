import React,{useState} from 'react'
import axios from 'axios'
import Edittask from './Edittask'
import { Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'


const Taskitem =(props)=>{
    const [toggle,settoggle]= useState(false)
    const {id,title,status,removeitem,edititem} =props
    
    const handleremove =()=>{
        const confrimremove = window.confirm(" Are you sure ?")
        if(confrimremove){
            axios.delete(`http://localhost:3033/api/tasks/${id}`)
                .then((response)=>{
                    const result = response.data
                    removeitem(result.id)
                })
                .catch((err)=> {
                    alert(err.message)

                })

        }
    }

    const handleToggle =()=>{
        const result =!toggle
        settoggle(result)
    }
    
    
    return (<div>
        {
            toggle ? (
                <div>
                <Edittask id={id} title={title} status={status} edititem={edititem} handleToggle={handleToggle}/>
                <button onClick ={handleToggle} >Cancel</button>
                </div>
            ):(
                <div>
                     <h3>{title}</h3> <input type="checkbox" checked = {status}/>
                   <Button startIcon= {<DeleteIcon />}size ="small" variant="contained" color="secondary" onClick={handleremove}>Delete</Button>
                <Button size ="small" variant="contained" color="primary" onClick={handleToggle}>Edit</Button>
                </div>
            )
        }
       

    </div>)

}

export default Taskitem