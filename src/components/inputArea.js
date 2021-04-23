import React,{ useState } from "react";

const InputArea =(props) =>{
    const [inputText,setInputText]=useState("");
    const handleChange=(event)=>{
        setInputText(event.target.value);

    };
    
    return(
        <div className="form">
            <input type="text" onChange={handleChange} value={inputText}/>
            <button onClick={()=>{
                props.addItems(inputText);
                setInputText(""); 

            }}
            >
                <span>
                  add
                </span>
            </button>
        </div>
    );
};
export default InputArea;
