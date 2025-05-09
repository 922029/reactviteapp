import React,{useState} from "react";

function TodoApp(){
    const[input,setInput]=useState("");
    const[todos,setTodos]=useState([]);

    const handleAdd=()=>{
        if(input.trim()==="")return;
        setTodos([...todos,input]);
        setInput("");
    };
    return(
        <div>
            <input
                type = "text"
                value = {input}
                onChange= {(e)=>setInput(e.target.value)}
                placeholder="やることを入力"
            />
            <button onClick= {handleAdd}>追加</button>

            <ul>
                {todos.map((todo,index)=>(
                    <li key= {index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}
export default TodoApp;