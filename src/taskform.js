import React,{useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import { Button } from '@material-ui/core'
import Save from '@material-ui/icons/Save'



const Taskform =(props)=>{
    const {formSubmit,isSaved,toggleIsSaved, id: slno, title:tasktitle,status :taskstatus} = props
    const [id,setId] = useState(slno ? slno :uuidv4())
    const [title,setTitle] = useState(tasktitle ? tasktitle :"")
    const [status,setSattus] =useState(taskstatus ? taskstatus :false)

    useEffect(()=>{
       if(isSaved){
           setSattus(false)
           setTitle("")
           setId(uuidv4())
           toggleIsSaved()
       }

    },[isSaved])
    
    const handleTitle =(e)=>{
        setTitle(e.target.value)
    }

    const handleStatus =(e)=>{
        setSattus (e.target.checked)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        const formdata ={
            id:id,
            title:title,
            status:status
        }
        formSubmit(formdata)

    }
    
    
    return (<div>
        <form onSubmit ={handleSubmit}>
            <input type ="text" value ={title} onChange={handleTitle}/><br/>
            <input type="checkbox" checked={status} onChange={handleStatus}/><label>Completed</label><br/>
            <input type ="submit" value="save"/>
        </form>
    </div>)
}

export default Taskform