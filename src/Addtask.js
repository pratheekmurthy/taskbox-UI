import React,{useState} from 'react'
import Taskform from './taskform'
import axios from 'axios'
import Alert from '@material-ui/lab/Alert'


const AddTask=(props)=>{
    const {addItem} =props
    const [isSaved,setIsSaved] = useState(false)


    const formSubmit =(task)=>{
        
        axios.post("http://localhost:3033/api/tasks",task)
            .then((response)=>{
                const result=response.data
                addItem(result);
                setIsSaved(true);
                <Alert variant="filled" severity="success">Task Added Successfully </Alert>
                
          })
            .catch((err)=>{
                alert(err.message)
            })
            
        
           
    }

    const toggleIsSaved =()=>{
        setIsSaved(false)
    }
    
    return (<div>
        <h2>Add Task</h2>
        <Taskform formSubmit={formSubmit} isSaved={isSaved} toggleIsSaved={toggleIsSaved}/>
    </div>)
}

export default AddTask