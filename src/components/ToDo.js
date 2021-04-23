import React from 'react'
const ToDo =(props)=>{
    return(
        <div  onClick={()=>props.deleteItem(props.id)}>
            <div>
            <li>{props.text}</li>
        </div>
        </div>
    )
}

export default ToDo